import { editorcss } from "./editor.css";

(function () {
  "use strict";

  (function ($) {
    if (typeof tinymce === "undefined") {
      return;
    }

    tinymce.PluginManager.add("reoakotranslationdialog", function (editor) {

      editor.on('click', function(){

          const mceSelection = editor.selection;
          const currentNode = $(mceSelection.getEnd());

          if (currentNode?.context?.nodeName === "REOAKO"){
            const targetNode = currentNode.closest("reoako");
            mceSelection.select(targetNode.get(0));
          }

      });

      function showDialog() {
        var url,
          urlParams,
          mceSelection,
          $currentNode,
          $targetNode,
          insertElement,
          currentText;
        currentText = "";

        mceSelection = editor.selection;
        $currentNode = $(mceSelection.getEnd());
        // target selected embed (if any)
        $targetNode = $currentNode.closest("reoako");

        if ($targetNode.length) {
          currentText = $targetNode.text();
          if ($targetNode.children().length === 0) {
            // select and replace text-only target
            insertElement = function (elem) {
              mceSelection.select($targetNode.get(0));
              mceSelection.setNode(elem);
            };
          } else {
            // replace attributes of complex target
            insertElement = function (elem) {
              mceSelection.select($targetNode.get(0));
              var $elem = $(elem);
              $targetNode.attr("id", $elem.attr("data-reoako-id"));
            };
          }
        } else {
          if (!mceSelection.isCollapsed()) {
            currentText = mceSelection.getContent({ format: "text" });
          }
          // replace current selection
          insertElement = function (elem) {
            mceSelection.setNode(elem);
          };
        }

        url = "/reoako-modal/search?search_term=" + currentText;

        var instance = tinymce.activeEditor.windowManager.open(
          {
            title: "Reoako Search",
            url: url,
            width: 800,
            height: 600,
            editor: editor,
          },
          { currentText: currentText }
        );

        window._reoako = instance;
      }

      const button = editor.addButton("reoakotranslationdialog", {
        icon: "reoako-icon",
        tooltip: "Reoako translation dialog",
        onclick: showDialog,
        stateSelector: "reoako",
      });

      editor.addCommand("mceTranslationDialog", showDialog);

      var shortcode_regex =
        /(\[reoako )(data-reoako-headword=("(?<headword>.*?)")).((data-reoako-id=("(?<id>.*?)")).)(data-reoako-translation=("(?<translation>.*?)"))(])/gi;

      var reoako_regex =
        /((\<reoako ((class="(.*?)").*?(data-reoako-headword="(?<headword>.*?)").*?(data-reoako-id="(?<id>.*?)").*?(data-reoako-translation="(?<translation>.*?)").*?)>)(.*?)(<\/reoako>))/g;

      function ifShortcode(content) {
        return content.search(shortcode_regex) !== -1;
      }

      function replaceShortcodes(content) {
        const matches = [...content.matchAll(shortcode_regex)];
        matches.forEach((match) => {
          // Find all required attributes and rebuild tag
          if ("0" in match) {
            const str = match["0"];
            let headword,
              id,
              translation = undefined;
            if (match["groups"]["headword"]) {
              headword = match["groups"]["headword"];
            }
            if (match["groups"]["id"]) {
              id = match["groups"]["id"];
            }
            if (match["groups"]["translation"]) {
              translation = match["groups"]["translation"];
            }
            if (headword && id && translation) {
              const tag = `<reoako class="reoako-tinymce" data-reoako-headword="${headword}" data-reoako-id="${id}" data-reoako-translation="${translation}">${translation}</reoako>`;
              content = content.replace(str, tag);
            }
          }
        });
        return content;
      }

      editor.on("KeyUp", function(ed, e){
        const evt = e || window.event;
        var charCode = evt.keyCode || evt.which;
        const currentNode = $(editor.selection.getEnd());
        const insideReoako = currentNode?.context?.nodeName === 'REOAKO';

        // 8 = backspace
        // 32 = space
        // 37 = left arrow
        // 39 = right arrow
        // 38 = up arrow
        // 40 = down arrow
        // 46 = delete

        // Ignore up or down
        if( [38, 40].includes(charCode)){
          return;
        }

        // auto select reoako word
        if(insideReoako && [37, 39].includes(charCode)){
          if(currentNode !== currentNode.closest("reoako")){
            const targetNode = currentNode.closest("reoako");
            const cursorPos = editor.selection.getRng().startOffset;
            const targetLength = currentNode?.context?.innerText.length;

            if(cursorPos !== targetLength){
              editor.selection.select(targetNode.get(0));
              evt.preventDefault();
              return;
            }
          }
        }

        // Delete the tag if you are inside it and press delete or backspace
        if(charCode === 8 && insideReoako || charCode === 46 && insideReoako){
          editor.execCommand('insertContent', true, ' ');
          currentNode.remove();
          evt.preventDefault();
          return;
        }

        if( ![37, 39].includes(charCode) && insideReoako){
          evt.preventDefault();
          return;
        }
    })
      function restoreShortcodes(content) {
        const matches = [...content.matchAll(reoako_regex)];

        matches.forEach((match) => {
          if ("0" in match) {
            const str = match["0"];
            let headword,
              id,
              translation = undefined;
            if (match["groups"]["headword"]) {
              headword = match["groups"]["headword"];
            }
            if (match["groups"]["id"]) {
              id = match["groups"]["id"];
            }
            if (match["groups"]["translation"]) {
              translation = match["groups"]["translation"];
            }
            if (headword && id && translation) {
              const tag = `[reoako data-reoako-headword="${headword}" data-reoako-id="${id}" data-reoako-translation="${translation}"]`;
              content = content.replace(str, tag);
            }
          }
        });
        return content;
      }

      editor.on("BeforeSetContent", function (event) {
        // No shortcodes in content, return.
        if (!ifShortcode(event.content)) {
          return;
        }
        event.content = replaceShortcodes(event.content);
      });

      editor.on("PostProcess", function (event) {
        if (event.get) {
          event.content = restoreShortcodes(event.content);
        }
      });

    });
  })(jQuery);
}.call(this));

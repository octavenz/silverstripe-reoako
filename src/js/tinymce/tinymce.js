import { editorcss } from "./editor.css";

(function () {
  "use strict";

  (function ($) {
    if (typeof tinymce === "undefined") {
      return;
    }

    tinymce.PluginManager.add("reoakotranslationdialog", function (editor) {
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
              const tag = ` <reoako class="reoako-tinymce" data-reoako-headword="${headword}" data-reoako-id="${id}" data-reoako-translation="${translation}">${translation}</reoako> `;
              content = content.replace(str, tag);
            }
          }
        });
        return content;
      }

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
              const tag = ` [reoako data-reoako-headword="${headword}" data-reoako-id="${id}" data-reoako-translation="${translation}"] `;
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

      //   // [reoako headword="September" id="mahuru" translation="Mahuru"]
      //   // <span data-reoako-headword="September" data-reoako-id="mahuru" data-reoako-translation="Mahuru" class="reoako-trigger" tabindex="0" role="button" title="Show translation" aria-label="Show translation" lang="mi">
    });
  })(jQuery);
}.call(this));

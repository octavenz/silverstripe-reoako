import { editorcss } from "./editor.css";

console.log("tinymce plugin loaded");
// import css from "@octavenz/reoako/dist/reoako.css";
// import Reoako from "@octavenz/reoako";

// Reoako.init({
//   apiKey: "b793e22c938d01952a5137b6b463c13e89d22432",
//   debug: true,
//   track: (type, detail) => {
//     // optional. hook into your analytics when events occur
//     if (typeof detail === "string") {
//       console.log(type, detail);
//     } else if ("en" in detail) {
//       console.log(type, `${detail.en} | ${detail.mi}`);
//     }
//   },
// });

(function () {
  "use strict";

  (function ($) {
    tinymce.PluginManager.add("reoakotranslationdialog", function (editor) {
      // function createSpan(translationData, currentText) {
      //   var span;

      //   // Create link
      //   span = document.createElement("span");
      //   span.setAttribute("data-reoako-id", translationData.reoruaId);
      //   span.setAttribute("title", translationData.reoruaHeadword);
      //   span.appendChild(
      //     document.createTextNode(translationData.reoruaTranslation)
      //   );

      //   return span;
      // }

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
        $targetNode = $currentNode.closest("[reoako");

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
        tooltip: "Insert/edit translation",
        onclick: showDialog,
        stateSelector: "[reoako]",
      });

      // const menuitem = editor.addMenuItem("reoakotranslationdialog", {
      //   icon: "reoako-icon",
      //   text: "Insert/edit translation",
      //   onclick: showDialog,
      //   context: "insert",
      //   prependToContext: true,
      //   stateSelector: "[reoako]",
      // });
      editor.addCommand("mceTranslationDialog", showDialog);
    });
    console.log("reoako tinymce plugin loaded");
  })(jQuery);
}.call(this));

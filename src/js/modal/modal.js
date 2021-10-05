// console.log("reoako modal js loaded");

// //Hacky iframe parent JQuery js
// var $ = window.parent.jQuery;
// var reoakoInstance = window.parent._reoako;

// if (reoakoInstance) {
//   var editor = reoakoInstance.features.editor;
//   console.log("Working");

//   $(".choose-word", document).on("click", (e) => {
//     console.log(e);
//   });

//   $(".choose-word", document).on("click", (e) => {
//     $headword = "TEST";
//     $mi = "SHORTCODE TEST hunga-pāpāho";

//     var word = e.currentTarget.getAttribute("data-reoako-translation");

//     var constructed_shortcode =
//       "<span " +
//       'data-reoako-headword="' +
//       word +
//       '"' +
//       'data-reoako-id="' +
//       word +
//       '"' +
//       'data-reoako-translation="' +
//       word +
//       '"' +
//       'class="reoako-trigger">' +
//       word +
//       "</span>";

//     editor.insertContent(constructed_shortcode);
//     reoakoInstance.close();
//   });

//   // Close window
//   $(".close", document).on("click", (e) => {
//     reoakoInstance.close();
//   });

//   // Auto refresh TODO: (replace with ajax)
//   $("#Form_reoakoInput", document).keyup(() => {
//     $("#Form_reoakoForm", document).trigger("submit");
//   });
// }

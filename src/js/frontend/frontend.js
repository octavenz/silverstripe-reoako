import Reoako from "@octavenz/reoako";

// import css from "~@octavenz/reoako/dist/reoako.css";
import css from "@octavenz/reoako/dist/reoako.css";

// console.log("reoako frontend js loaded");

Reoako.init({
  apiKey: "b793e22c938d01952a5137b6b463c13e89d22432",
  debug: false,
  // track: (type, detail) => {
  //   // optional. hook into your analytics when events occur
  //   if (typeof detail === "string") {
  //     console.log(type, detail);
  //   } else if ("en" in detail) {
  //     console.log(type, `${detail.en} | ${detail.mi}`);
  //   }
  // },
});

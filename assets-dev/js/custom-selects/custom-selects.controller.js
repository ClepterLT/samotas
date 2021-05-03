import $ from "jquery";
import CustomSelects from "./custom-selects.class";

$(document).ready(function () {
  try {
    let customSelects = new CustomSelects(".js-custom-select", 0);
    customSelects.init();
  } catch (e) {
    // do nothing
  }

  try {
    let customSelectsSkipFirst = new CustomSelects(
      ".js-custom-select-skipFirst",
      1
    );
    customSelectsSkipFirst.init();
  } catch (e) {
    // do nothing
  }
});

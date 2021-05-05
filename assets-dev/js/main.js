import $ from "jquery";
import "./custom-selects/custom-selects.controller";

$(document).ready(function() {

    $(".nav-header__button").click(function () {
        const navicon = $(".nav-header__icon");
        const navwrap = $("#nav-header-wrap");
        navicon.toggleClass("nav-header__icon--hidden");
        navwrap.toggleClass("nav-header-wrap--mobile");
    })

});

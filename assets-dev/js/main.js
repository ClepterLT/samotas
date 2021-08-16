import $ from "jquery";
import "./custom-selects/custom-selects.controller";
import "./popup";
import "./form-validator";

$(document).ready(function() {

    $(".nav-header__button").click(function () {
        const navIcon = $(".nav-header__icon");
        const navMobile = $("#nav-header--mobile");
        navIcon.toggleClass("nav-header--hidden");
        navMobile.toggleClass("nav-header--hidden");
    })

});

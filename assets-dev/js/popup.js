import $ from "jquery";

$(document).ready(function () {
    const popupOverlay = document.querySelector(".popup__overlay");
    const popupWindow = document.querySelector(".popup");
    const btnClosePopup = document.querySelector(".popup__button-close");
    const btnsOpenPopup = document.querySelectorAll(".popup__button-open");

    const openPopup = function (e) {
        e.preventDefault();
        popupWindow.classList.remove("popup__hidden");
        popupOverlay.classList.remove("popup__hidden");
      };
      
      const closePopup = function () {
        popupWindow.classList.add("popup__hidden");
        popupOverlay.classList.add("popup__hidden");
      };
      
      btnsOpenPopup.forEach((btn) => btn.addEventListener("click", openPopup));
      
      btnClosePopup.addEventListener("click", closePopup);
      popupOverlay.addEventListener("click", closePopup);
      
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !popupWindow.classList.contains("popup__hidden")) {
          closePopup();
        }
      });
});
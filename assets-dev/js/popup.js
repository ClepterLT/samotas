import $ from "jquery";

$(document).ready(function () {
    const popupOverlay = document.querySelector(".popup__overlay");
    const popupWindows = document.querySelectorAll(".popup");
    const btnsClosePopup = document.querySelectorAll(".popup__button-close");
    const btnsOpenPopup = document.querySelectorAll(".popup__button-open");

    const openPopup = function (e) {
        e.preventDefault();
        popupWindows.forEach((window) => {
          if (window.id === e.target.id) {
            window.classList.remove("popup__hidden");
            popupOverlay.classList.remove("popup__hidden");
          }
        });
      };
      
    const closePopup = function () {
      popupWindows.forEach((window) => {
        window.classList.add("popup__hidden");
      });
      popupOverlay.classList.add("popup__hidden");
    };
      
    btnsOpenPopup.forEach((btn) => btn.addEventListener("click", openPopup));
    
    btnsClosePopup.forEach((btn) => btn.addEventListener("click", closePopup));
    popupOverlay?.addEventListener("click", closePopup);
    
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !popupOverlay.classList.contains("popup__hidden")) {
        closePopup();
      }
    });
});
import $ from "jquery";
export default class CustomSelect {
  constructor(identifier, startIndex) {
    this.identifier = identifier;
    this.startIndex = startIndex;
  }

  optionCLickHandler(option) {
    const select = option.parentNode.parentNode.querySelector("select");
    const selectionHolder = option.parentNode.previousSibling;

    for (let i = 0; i < select.length; i++) {
      if (select.options[i].value == option.dataset.optionValue) {
        select.selectedIndex = i;
        select.dispatchEvent(new Event("change"));
        selectionHolder.innerHTML = option.innerHTML;
        const prevSelections = option.parentNode.querySelectorAll(
          ".same-as-selected"
        );
        prevSelections.forEach((opt) => {
          opt.removeAttribute("class");
        });
        option.setAttribute("class", "same-as-selected");
        break;
      }
    }
    selectionHolder.click();
  }

  closeOtherSelects(exception) {
    const allSelects = document.querySelectorAll(this.identifier);
    allSelects.forEach((select) => {
      if (select != exception && select.querySelector("select")) {
        select
          .querySelector(".select-selected")
          .classList.remove("select-arrow-active");
        select.querySelector(".select-items").classList.add("select-hide");
      }
    });
  }

  selectionHolderClickHandler(holder, modal) {
    this.closeOtherSelects(holder.parentElement);
    holder.classList.toggle("select-arrow-active");
    modal.classList.toggle("select-hide");
  }

  updateCustomSelect(select, selectionHolder, optionsModal) {
    selectionHolder.innerHTML = select.options[select.selectedIndex].innerHTML;
    const options = optionsModal.childNodes;
    for (const option of options) {
      if (option.dataset.optionValue === selectionHolder.dataset.optionValue) {
        option.classList.add("same-as-selected");
      } else {
        option.classList.remove("same-as-selected");
      }
    }
  }

  createOptionsModal(select) {
    const modal = document.createElement("DIV");
    modal.setAttribute("class", "select-items select-hide");
    for (let i = this.startIndex; i < select.length; i++) {
      const option = document.createElement("DIV");
      option.setAttribute("data-option-value", select.options[i].value);
      option.innerHTML = select.options[i].innerHTML;
      if (select.options[i].selected) {
        option.setAttribute("class", "same-as-selected");
      }
      option.addEventListener("click", () => {
        this.optionCLickHandler(option);
      });
      modal.appendChild(option);
    }
    return modal;
  }

  createSelectionHolder(select) {
    const selectionDiv = document.createElement("DIV");
    selectionDiv.setAttribute("class", "select-selected");
    selectionDiv.setAttribute(
      "data-option-value",
      select.options[select.selectedIndex].value
    );
    selectionDiv.innerHTML = select.options[select.selectedIndex].innerHTML;
    return selectionDiv;
  }

  createCustomSelect() {
    const holders = document.querySelectorAll(this.identifier);
    holders.forEach((holder) => {
      const select = holder.querySelector("select");
      if (select) {
        const selectionHolder = this.createSelectionHolder(select);
        const optionsModal = this.createOptionsModal(select);
        holder.appendChild(selectionHolder);
        holder.appendChild(optionsModal);
        select.addEventListener("change", () => {
          this.updateCustomSelect(select, selectionHolder, optionsModal);
        });
        selectionHolder.addEventListener("click", () => {
          this.selectionHolderClickHandler(selectionHolder, optionsModal);
        });
      }
    });
  }

  static redirectOnChange(url) {
    if (url) window.location.replace(url);
  }

  init() {
    this.createCustomSelect();
    $(document).on("click", (event) => {
      if (
        !$(event.target).closest(this.identifier).length &&
        !$(event.target).is(this.identifier)
      ) {
        $(this.identifier).children(".select-items").addClass("select-hide");
      }
    });
  }
}

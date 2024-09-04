// "checkBox" logic ==================================================
// Function for the checkBox icon to enable it change state when clicked
function change_icon_state(elem) {
  if (elem.classList.contains("fa-square-o")) {
    elem.classList.remove("fa-square-o");
    elem.classList.add("fa-check-square-o");
  } else {
    elem.classList.remove("fa-check-square-o");
    elem.classList.add("fa-square-o");
  }
}

// function to check the state of description drop-down icon(to know if the icon arrow is facing down or up)=================================================
function check_description_icon_state(elem) {
  if (elem.querySelector(".desc-icon").classList.contains("fa-chevron-up")) {
    return true;
  } else if (
    elem.querySelector(".desc-icon").classList.contains("fa-chevron-down")
  ) {
    return false;
  }
}

//This function to change the description drop-down icon when the description button is clicked
// NOTE == True means the icon arrow is facing up & False means it is facing down==========================
let up_or_down;
function change_description_icon(elem) {
  if (check_description_icon_state(elem) === true) {
    elem.querySelector(".desc-icon").classList.toggle("fa-chevron-up");
    elem.querySelector(".desc-icon").classList.toggle("fa-chevron-down");
    up_or_down = "down";
    return up_or_down;
  } else if (check_description_icon_state(elem) === false) {
    elem.querySelector(".desc-icon").classList.toggle("fa-chevron-down");
    elem.querySelector(".desc-icon").classList.toggle("fa-chevron-up");
    up_or_down = "up";
    return up_or_down;
  }
}

// This function is to hide or display the task description ,based on the state of the description drop-down icon(up for hide and down for display)===========
function hide_or_show_description(elem) {
  if (up_or_down == "up") {
    elem.parentElement.parentElement.parentElement
      .querySelector("div.description-a")
      .classList.toggle("hide");
  } else if (up_or_down == "down") {
    elem.parentElement.parentElement.parentElement
      .querySelector("div.description-a")
      .classList.toggle("hide");
  }
}

// the function below is to add a trigger for the  "change_description_icon" function and the "hide_or_show_description" function to the description button (if you're looking for the function reference(where the function below is invoked), it's inside the description button element(as an attribute ['click'] value ['description_state(this)']))==============================
function description_state(elem) {
  change_description_icon(elem);
  hide_or_show_description(elem);
}

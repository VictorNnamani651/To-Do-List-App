// check button logic =========================================
// this code is responsible for controlling the check box (to display as checked or unchecked)
// added an event listener to the check icon to enable it change state on click
let checkBox = document.getElementById("checkBox");
checkBox.addEventListener("click", () => {
  if (checkBox.classList.contains("fa-square-o")) {
    checkBox.classList.remove("fa-square-o");
    checkBox.classList.add("fa-check-square-o");
  } else {
    checkBox.classList.remove("fa-check-square-o");
    checkBox.classList.add("fa-square-o");
  }
});
// ===================================================================

// description button logic========================================
let descriptionButton = document.getElementsByClassName("desc-btn")[0];
let descriptionIcon = document.getElementsByClassName("desc-icon")[0];
let descriptionDiv = document.getElementsByClassName("description-a")[0];

// function to check the state of description icon(to know if the icon is facing down or up)================
function check_description_icon_state() {
  if (descriptionIcon.classList.contains("fa-chevron-up")) {
    return true;
  } else if (descriptionIcon.classList.contains("fa-chevron-down")) {
    return false;
  }
}
// =========================================================================================

// function to change the description icon when the description button is clicked=======================
// NOTE == True means the icon arrow is facing up & False means it is facing down==========================
let up_or_down;
function change_description_icon() {
  if (check_description_icon_state() === true) {
    descriptionIcon.classList.toggle("fa-chevron-up");
    descriptionIcon.classList.toggle("fa-chevron-down");
    up_or_down = "down";
    return up_or_down;
  } else if (check_description_icon_state() === false) {
    descriptionIcon.classList.toggle("fa-chevron-down");
    descriptionIcon.classList.toggle("fa-chevron-up");
    up_or_down = "up";
    return up_or_down;
  }
}

// function to hide or display the description based on the state of the description icon(up for hide and down for display)=======
function hide_or_show_description() {
  if (up_or_down == "up") {
    descriptionDiv.classList.toggle("hide");
  } else if (up_or_down == "down") {
    descriptionDiv.classList.toggle("hide");
  }
}
// ==========================================================================================================

// the code below is to add a trigger for the  change_description_icon function and the hide_or_show_description function to the description button==
descriptionButton.addEventListener("click", () => {
  change_description_icon();
  hide_or_show_description();
});
// ================================================================================

// // Add_task button logic==============================================
// let add_task_button = document.getElementById("add_task");
// let new_task_div = document.createElement

// function create_new_task(){
  
// }
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
// ===================================================================

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
// =========================================================================================

// function to change the description drop-down icon when the description button is clicked
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

// function to hide or display the task description based on the state of the description drop-down icon(up for hide and down for display)=======
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
// ==========================================================================================================

// the function below is to add a trigger for the  change_description_icon function and the hide_or_show_description function to the description button==============================
function description_state(elem) {
  change_description_icon(elem);
  hide_or_show_description(elem);
}
// ================================================================================

// // Code to add a new task to the app via the DOM=======================================================
let add_task_button = document.getElementById("add_task");

add_task_button;

let new_task;
add_task_button.addEventListener("click", () => {
  new_task = document.createElement("div");
  new_task.classList.add("task");
  new_task.innerHTML = `<div class="task">
          <div class="title-a">
            <div class="firstHalf">
              <i
                class="fa fa-square-o checkBox"
                onclick="change_icon_state(this)"
              ></i>
              <div class="task-title">
                Task Title
                <div class="task-due-date">08/05/2024</div>
              </div>
            </div>
            <div class="secondHalf">
              <button class="desc-btn ft-btn" onclick="description_state(this)">
                <i class="fa fa-chevron-down desc-icon"></i>
              </button>
              <button class="ft-btn delete_btn">
                <i class="fa fa-trash"></i>
              </button>
              <button class="ft-btn edit_btn">
                <i class="fa fa-edit"></i>
              </button>
            </div>
          </div>
          <div class="description-a hide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sint
            modi nemo a ipsam maxime et voluptatem iusto nulla vel.
          </div>
        </div>`;
  document.getElementById("tasks").appendChild(new_task);
});

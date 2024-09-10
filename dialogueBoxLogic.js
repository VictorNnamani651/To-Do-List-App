{
  // Code to take user input then add a new task to the app via the DOM =======================================================
}
// This function is to toggle the display state of the dialogue box================================================
let dialogue_box = document.querySelector(".dialogue-box-container");
function toggle_dialogue_box_display_state() {
  add_task_button.value = "Add Task";
  dialogue_box.classList.toggle("hide");
}

// the event listener below was added to the "add task" button (at the bottom right of the screen) to enable it display the dialogue box which will be used to collect the details from the user for the task that is to be created====================================
let new_task_button = document.getElementById("add_task");
new_task_button.addEventListener("click", () => {
  toggle_dialogue_box_display_state();
});

// this function is to empty the input boxes within the dialogue box==============================================
function empty_input_boxes() {
  task_title.value = "";
  task_due_date.value = "";
  task_description.value = "";
}

//  added an event listener to the "add task" button, that is within the dialgue box , which then checks whether the task title and date have been filled in and then adds a new task to the app if so and finally, it hides the dialogue box========
let dialogue_submit = document.querySelector("#submit_details");
dialogue_submit.addEventListener("click", () => {
  if (task_title.value.length && task_due_date.value.length > 0) {
    create_new_task();
    toggle_dialogue_box_display_state();
    empty_input_boxes();
  }
});

// code to close dialogue box on the click of the close button========================================================================================
let close_dialgue_box_button = document.querySelector(
  "#close_dialogue_box_btn"
);
close_dialgue_box_button.addEventListener("click", (evt) => {
  evt.preventDefault();
  toggle_dialogue_box_display_state();
  empty_input_boxes();
});

// function to check if all the input spaces have been filled (within the dialogue box) before submitting. [This function was created incase we use the enter key to submit the task info instead of the button on the screen]==============================================
function check_input_spaces(event) {
  if (
    task_title.value.length > 0 &&
    task_due_date.value.length > 0 &&
    task_description.value.length > 0 &&
    event.key === "Enter"
  ) {
    event.preventDefault();
    add_task_button.click();
    empty_input_boxes();
  }
}

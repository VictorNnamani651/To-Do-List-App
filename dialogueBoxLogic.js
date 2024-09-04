{
  // Code to take user input then add a new task to the app via the DOM =======================================================
}
// This function is to toggle the display state of the dialogue box================================================
let dialogue_box = document.querySelector(".dialogue-box-container");
function toggle_dialogue_box_display_state() {
  dialogue_box.classList.toggle("hide");
}

// the event listener below was added to the "add task" button to enable it display the dialogue box which will be used to collect the details from the user for the task that is to be created====================================
let new_task_button = document.getElementById("add_task");
new_task_button.addEventListener("click", () => {
  toggle_dialogue_box_display_state();
});

//  added an event listener to the "add task" button, that is within the dialgue box , which then checks whether the task title and date have been filled in and then adds a new task to the app if so and finally, it hides the dialogue box========
let dialogue_submit = document.querySelector("#submit_details");
dialogue_submit.addEventListener("click", () => {
  if (task_title.value.length && task_due_date.value.length > 0) {
    create_new_task();
    toggle_dialogue_box_display_state();
    task_title.value = "";
    task_due_date.value = "";
    task_description.value = "";
  }
});

// code to close dialogue box on the click of the close button=================

let close_dialgue_box_button = document.querySelector(
  "#close_dialogue_box_btn"
);
close_dialgue_box_button.addEventListener("click", () => {
  toggle_dialogue_box_display_state();
});

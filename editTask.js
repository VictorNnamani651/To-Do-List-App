// This function sets the input values within the dialgoue box (title,date & description) according to the details of the task that was clicked.
function add_inputs_of_task_to_be_edited(elem) {
  task_title.value =
    elem.parentNode.parentNode.querySelector(".task-title p").innerText;
  task_due_date.value = elem.parentNode.parentNode.querySelector(
    ".task-title .task-due-date"
  ).innerText;
  task_description.value =
    elem.parentNode.parentNode.parentNode.querySelector(
      ".description-a"
    ).innerText;
}

// this function changes the text on the "add task" button(within the dialogue box) from "add task" to "Save changes"
let add_task_button = document.querySelector("#submit_details");
function change_submit_button_value(elem) {
  add_task_button.value = "Save Changes";
}

// This function checks if the "add task" button now shows the text "Save Changes",and if it does, the function sets the action of the button to delete and add the corrected/edited version of the task selected
function edit(elem) {
  if (add_task_button.value == "Save Changes") {
    add_task_button.addEventListener("click", () => {
      elem.parentNode.parentNode.parentNode.remove();
    });
  }
}

function show_dialogue_box(elem) {
  toggle_dialogue_box_display_state();
  add_inputs_of_task_to_be_edited(elem);
  change_submit_button_value();
  edit(elem);
}

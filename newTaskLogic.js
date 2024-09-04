// this code/function creates and adds a new task to the to-do app=================================
let task_title = document.querySelector("#title");
let task_due_date = document.querySelector("#date");
let task_description = document.querySelector("#description");
let new_task;
function create_new_task() {
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
                <p>${task_title.value}</p>
                <div class="task-due-date">${task_due_date.value}</div>
              </div>
            </div>
            <div class="secondHalf">
              <button class="desc-btn ft-btn" onclick="description_state(this)">
                <i class="fa fa-chevron-down desc-icon"></i>
              </button>
              <button class="ft-btn delete_btn" onclick="delete_task(this)">
                <i class="fa fa-trash"></i>
              </button>
              <button class="ft-btn edit_btn" onclick="show_dialogue_box(this)">
                <i class="fa fa-edit"></i>
              </button>
            </div>
          </div>
          <div class="description-a hide">
            ${task_description.value}
          </div>
        </div>`;
  document.getElementById("tasks").appendChild(new_task);
}

// This function is to delete any selected task {this function is used as the action for a click event on the "delete task" button. The event listener using this function is placed directly in the element}
function delete_task(elem) {
    elem.parentNode.parentNode.parentNode.remove();
}
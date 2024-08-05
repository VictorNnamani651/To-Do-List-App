// check button logic =========================================
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

// let checked = document.getElementsByClassName("fa-square-o")[0];
// let unchecked = document.getElementsByClassName("fa-check-square-o")[0];

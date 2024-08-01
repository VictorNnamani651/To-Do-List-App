// To animate cover page slide out when start button is clicked
let coverPage = document.getElementById("cover");
let startButton = document.getElementById("startbtn");
startButton.addEventListener("click", () => {
  coverPage.classList.toggle("animate__slideOutUp");
  
});

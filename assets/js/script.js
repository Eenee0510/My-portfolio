let modal = document.getElementById("modal");
let myBtn = document.getElementById("resume");
let close = document.getElementById("close")

myBtn.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
}
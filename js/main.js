var menuIcon = document.getElementById('hamburger');
var offCanvas = document.getElementById('off-canvas');

menuIcon.addEventListener('click', function () {
  if (offCanvas.className === undefined || offCanvas.className === "")
  offCanvas.className = "menu-visible";
  else offCanvas.className = "";
});
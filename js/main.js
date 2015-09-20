var menuIcon = document.getElementById('hamburger');
var body = document.getElementsByTagName('body')[0];

menuIcon.addEventListener('click', function () {
  if (body.className === undefined || body.className === "")
    body.className = "menu-visible";
  else body.className = "";
});

var menuIcon = document.getElementById('hamburger');
var nav = document.getElementsByTagName('nav')[0];

menuIcon.addEventListener('click', function () {
  if (nav.className === undefined || nav.className === "")
    nav.className = "menu-visible";
  else nav.className = "";
});

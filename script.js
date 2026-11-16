// Dark mode toggle.
// Theme is applied early in <head> (before paint) to avoid a flash of the
// wrong colour scheme; this just wires up the button and remembers the choice.
(function () {
  var toggle = document.getElementById("theme-toggle");
  var root = document.documentElement;

  function setIcon(theme) {
    var icon = toggle.querySelector(".theme-toggle-icon");
    icon.innerHTML = theme === "dark" ? "&#9789;" : "&#9788;"; // moon : sun
  }

  setIcon(root.getAttribute("data-theme") || "light");

  toggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setIcon(next);
  });
})();

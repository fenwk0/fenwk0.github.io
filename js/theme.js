// Dark mode toggle. The saved choice in localStorage wins; otherwise
// the operating system preference is used. The initial theme is applied
// by an inline script in each page's <head> to avoid a flash of the wrong theme.
(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  var icon = button.querySelector(".material-symbols-outlined");

  function render(theme) {
    var dark = theme === "dark";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
    if (icon) icon.textContent = dark ? "light_mode" : "dark_mode";
  }

  render(root.getAttribute("data-theme"));

  button.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    render(next);
  });
})();

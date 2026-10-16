(function () {
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("mobile-nav");
  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
  if (!btn || !nav) { return; }
  function setOpen(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) { nav.removeAttribute("hidden"); } else { nav.setAttribute("hidden", ""); }
  }
  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) { setOpen(false); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { setOpen(false); }
  });
})();

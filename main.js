document.addEventListener("DOMContentLoaded", function () {
  var chips = document.querySelectorAll(".filter-chip");
  var rows = document.querySelectorAll(".activite-item");

  if (!chips.length) return;

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");

      var filter = chip.getAttribute("data-filter");
      rows.forEach(function (row) {
        var match = filter === "all" || row.getAttribute("data-category") === filter;
        row.style.display = match ? "" : "none";
      });
    });
  });
});

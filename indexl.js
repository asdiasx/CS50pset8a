const selections = document.querySelectorAll(".picture");
selections.forEach(function (selection) {
  setInterval(() => selection.classList.toggle("toggle_shadow"), 3000);
});
const switches = document.querySelectorAll(".switch_pic");
switches.forEach(function (switched) {
  setInterval(() => {
    switched.classList.toggle("off");
  }, 6000);
});

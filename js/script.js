const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");
const items = document.getElementsByClassName("item");

for (item of items) {
  item.addEventListener("dragstart", function (e) {
    let selected = e.target;

    // right box
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });

    // left box
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}

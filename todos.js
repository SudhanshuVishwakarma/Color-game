var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function () {
    this.style.color = "red";
    this.style.fontSize = "24px";
  });
  lis[i].addEventListener("mouseout", function () {
    this.style.color = "black";
    this.style.fontSize = "18px";
  });
}

// firstLI.addEventListener("mouseover", function () {
//   firstLI.style.color = "red";
// });
// firstLI.addEventListener("mouseout", function () {
//   firstLI.style.color = "black";
// });

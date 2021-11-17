const collapse = document.querySelectorAll(".collapse");
const collapsed = document.querySelectorAll(".collapsed");

console.log(collapse);

collapsed.forEach(function (element) {
  collapse.forEach(function (element2) {
    element.addEventListener("mouseover", (e) => {
      e.classList.add("show");
    });
  });
});

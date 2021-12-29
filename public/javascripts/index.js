const closeimg = document.querySelector(".closeimage");
const exit = document.querySelector(".exit1");

if (closeimg) {
  document.querySelector(".body").style.overflow = "hidden";
  exit.addEventListener("click", () => {
    document.querySelector(".body").removeChild(closeimg);
    document.querySelector(".body").style.overflow = "scroll";
  });
}

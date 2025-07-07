document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".rotate-on-click");

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      img.classList.toggle("rotated");
    });
  });

  console.log("JavaScript is connected!");
});

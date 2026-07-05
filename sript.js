let btn = document.querySelector("#btn");
let closeIcon = document.querySelector(".close-icon");
let trailer_container = document.querySelector(".trailer-container");
let video = document.querySelector("video");

btn.addEventListener("click", () => {
  trailer_container.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  trailer_container.classList.add("active");
  video.pause();
  video.currentTime = 0;
});

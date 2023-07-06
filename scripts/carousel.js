const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("arrow-prev");
const nextButton = document.getElementById("arrow-next");

nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
  });
prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});
const slidesContainerHeader = document.getElementById("slides-container-header");
const slideHeader = document.querySelector(".slide-header");
const prevButtonHeader = document.getElementById("arrow-prev-header");
const nextButtonHeader = document.getElementById("arrow-next-header");

prevButtonHeader.addEventListener("click", () => {
  const slideWidth = slideHeader.clientWidth;
  slidesContainerHeader.scrollLeft -= slideWidth;
});

nextButtonHeader.addEventListener("click", (event) => {
  console.log(nextButtonHeader)
  const slideWidth = slideHeader.clientWidth;
  slidesContainerHeader.scrollLeft += slideWidth;
});


const slidesContainerQuotes = document.getElementById("slides-container-quotes");
const slideQuotes = document.querySelector(".slide-quotes");
const prevButtonQuotes = document.getElementById("arrow-prev-quotes");
const nextButtonQuotes = document.getElementById("arrow-next-quotes");

prevButtonQuotes.addEventListener("click", () => {
  const slideWidth = slideQuotes.clientWidth;
  slidesContainerQuotes.scrollLeft -= slideWidth;
});
nextButtonQuotes.addEventListener("click", (event) => {
  console.log(nextButtonQuotes)
  const slideWidth = slideQuotes.clientWidth;
  slidesContainerQuotes.scrollLeft += slideWidth;
});

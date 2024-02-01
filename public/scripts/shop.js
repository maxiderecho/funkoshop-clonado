//  Filtro desplegable en el shop para versión mobile.

const filterButton = document.querySelector(".filter__button");
const filterContent = document.querySelector(".filter__content--desplegable");
const filterChevron = document.querySelector(".filter__button--icon");

filterButton.addEventListener("click", () => {
  filterContent.classList.toggle("filter-show");
  filterChevron.classList.toggle("filter__button--rotate");
});

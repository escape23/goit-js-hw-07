import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, description, original }) =>
        `<li class = "gallery__item js-product-item">
        <img src ="${preview}" alt = "${description}" class = 'gallery__image' data-source="${original}"/></li>`
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();
  const source = event.target.dataset.source;
  if (source) {
    const alt = event.target.alt;
    const instance = basicLightbox.create(`
    <img src="${source}" alt="${alt}">`);

    instance.show();
  }
}

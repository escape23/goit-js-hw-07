import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, description, original }) =>
        `<a class = "gallery__item js-product-item" href = "${original}">
        <img src ="${preview}" alt = "${description}" class = 'gallery__image' data-source="${original}"/></a>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

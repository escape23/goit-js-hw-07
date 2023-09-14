import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const list = document.querySelector(".gallery");

// list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

// list.addEventListener("click", handleClick);

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ preview, description, original }) =>
//         `<li class = "gallery__item js-product-item">
//                   <a class="gallery__link" href="${original}">
//         <img src ="${preview}" alt = "${description}" class = 'gallery__image' data-source="${original}"/></li>`
//     )
//     .join("");
// }

// function handleClick(e) {
//   //   const { target } = event;
//   //   if (!target.classList.contains("gallery__image")) {
//   //     return;
//   //   }
//   //   const url = event.target.dataset.source;

//   //   const instance = basicLightbox.create(`
//   //   <img src="${url}" width="800" height="600" >`);
//   e.preventDefault();
//   const url = e.target.dataset.source;
//   if (url) {
//     const alt = e.target.alt;
//     const instance = basicLightbox.create(`
//     <img src="${url}" width="800" height="600" alt="${alt}">`);

//     instance.show(() => {
//       window.addEventListener("keydown", (e) => onEscPress(e, instance), {
//         once: true,
//       });
//     });
//   }
// }

const picturesContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

picturesContainer.insertAdjacentHTML("beforeend", galleryMarkup);

picturesContainer.addEventListener("click", onPicturesContainerClick);

function createGalleryItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onPicturesContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target.dataset.source);

  const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}' width="800" height="600">
`);

  instance.show();

  picturesContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
  picturesContainer.removeEventListener("keydown", onPicturesContainerClick);
}

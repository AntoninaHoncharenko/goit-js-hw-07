import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// + 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galeryRef = document.querySelector(".gallery");

const galeryEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
  )
  .join("");

galeryRef.insertAdjacentHTML("beforeend", galeryEl);

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.

galeryRef.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  modal.show();

  galeryRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modal.close();
    }
  });
}

// + 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

// + 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// + 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// + 6. Додай закриття модального вікна після натискання клавіші Escape.
// Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
// Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.

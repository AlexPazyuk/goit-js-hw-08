// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

    
    const createGalleryItem = ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
const renderGallery = items => {
      const galleryMarkup = items.map(createGalleryItem).join('');
      gallery.innerHTML = galleryMarkup;
    };
    
renderGallery(galleryItems);
const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 1,

});
// Add imports above this line
import "../css/01-gallery.css"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems);

 const galleryContainer = document.querySelector('.gallery');
 const itemsMarkup = createGalleryItemsMarkup(galleryItems);
 galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

// console.log(createGalleryItemsMarkup(galleryItems))

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </li>
        `;
    })
    .join(' ');
}

new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });


  



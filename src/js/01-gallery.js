// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

const makeGalleryCard = ({original, preview, description} = {}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}"
    alt="${description}"  
    />
  </a>
`;
};

const galleryCardsArr = galleryItems.map(el => {
    return makeGalleryCard(el);
});

galleryListEl.insertAdjacentHTML('afterbegin', galleryCardsArr.join(''))

new SimpleLightbox('.gallery a', { 
    captionsData: "alt", captionDelay: 250,
 });

console.log(SimpleLightbox);

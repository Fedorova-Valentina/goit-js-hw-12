import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <span class="info-label">Likes</span>
              <span class="info-value">${likes}</span>
            </p>
            <p class="info-item">
              <span class="info-label">Views</span>
              <span class="info-value">${views}</span>
            </p>
            <p class="info-item">
              <span class="info-label">Comments</span>
              <span class="info-value">${comments}</span>
            </p>
            <p class="info-item">
              <span class="info-label">Downloads</span>
              <span class="info-value">${downloads}</span>
            </p>
          </div>
        </li>
      `
    )
    .join('');
}

export function createGallery(images) {
  gallery.insertAdjacentHTML('beforeend', createMarkup(images));
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}

import { refs } from './refs';

export default function createMarkup(response) {
  let markup = response.map(
    ({ poster_path, title, genres_ids, release_date, id }) => {
      return `<div class="card">
    <img id="${id}" src="https://image.tmdb.org/t/p/w200/${poster_path}" alt="${title}"  />
  <div class="film_info">
  <ul class="film_list">
   <li class="film_list"> ${title} </li>
    <li class="film_list"> ${genres_ids}</li>
     <li class="film_list">${release_date}</li>
  </ul>
  </div>
    </div>`;
    }
  );
  refs.galleryItem.insertAdjacentHTML('beforeend', markup.join(''));
}

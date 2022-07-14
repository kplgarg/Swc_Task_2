const API_KEY = "api_key=b219e85c7f33a1a34d082f4bd41e94d6";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

const rightPane = document.getElementById("right-pane");
const form = document.getElementById("form");
const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

fetchMovies(API_URL);
function fetchMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayMovies(data.results);
    });
}

function displayMovies(movies) {
  rightPane.innerHTML = "";
  // console.log(movies);
  movies.forEach((movie) => {
    const { title, poster_path } = movie;
    console.log(movie.title);
    const Card = document.createElement("div");
    Card.innerHTML = `
    <div class="h-72 w-64 py-2 ffffff flex flex-col items-center text-center rounded-md mt-12 ml-12 justify-center font-bold">
    <img src="${IMG_URL + poster_path}" alt="${title}" class="h-56 w-48 />
          <div id="movie-name">${title}</div>
    </div>
    `;
    rightPane.appendChild(Card);
  });
}

searchBtn.addEventListener("click", function (ref) {
  ref.preventDefault();
  if (search.value) {
    fetchMovies(searchURL + "&query=" + search.value);
  } else {
    fetchMovies(API_URL);
  }
});

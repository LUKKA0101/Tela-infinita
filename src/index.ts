async function featchMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODlhNGYyM2QwMjM0ZmZmYTNlOTAyZGFiYWJmODIwYyIsIm5iZiI6MTcyNjYwODU1Mi44OTUxMTQsInN1YiI6IjY2YjUzOTZiMzA0NTY5NjNjNzllOTk5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbvzd6pZ7I2AhDSqmzCEpdDDhviTDRe400RNefUBtbw",
  },
};

  const api = await fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc",
  options
);

  const response = await api.json();
  return response;
}

async function createCard() {
  const data = await featchMovies();

  const containerCard = document.querySelector(".container-card") as HTMLDivElement;

  interface typeMovie {
    title: string;
    poster_path: string;
    overview: string;
    popularity: number;
    release_date: string;
    vote_average: number;
    vote_count: number;
  }

  const movie: typeMovie[] = data.results;

  movie.forEach((filme: typeMovie) => {
    let cardImage = document.createElement("img");
    cardImage.className = "card-poster";
    cardImage.src = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;

    let cardTitle = document.createElement("h1");
    cardTitle.className = "card-name";
    cardTitle.textContent = filme.title;

    const card = document.createElement("div");
    card.className = "card";
    card.append(cardImage);
    card.append(cardTitle);

    card.addEventListener("click", () => {
      createCardFloating(filme);
    });

    containerCard.append(card);
  });

  async function createCardFloating(filme: typeMovie) {

        let cardDetaild = `
          <div class="floating-card-header">
              <h2 class="card-title">${filme.title}</h2>
              <button class="close-btn">X</button>
          </div>
          <div class="card-content">
            <div class="card-poster-floating">
              <img src="https:image.tmdb.org/t/p/w500${filme.poster_path}" alt="Pôster do Filme" class="card-image">
            </div>
            <div class="card-description">
              <p class="card-summary">${filme.overview}</p>
            </div>
          </div>
          <div class="card-movie">
            <span class="info-movie">Data de lançamento: ${filme.release_date} |</span>
            <span class="info-movie">Popularidade: ${filme.popularity} |</span>
            <span class="info-movie">média de votos: ${filme.vote_average} |</span>
            <span class="info-movie">contagem de votos: ${filme.vote_count}</span>
          </div>
        `;

      let cardDetaildActive = document.querySelector(".floating-card") as HTMLDivElement;
      cardDetaildActive.innerHTML = cardDetaild
      cardDetaildActive.style.display = 'flex';

      const closeBtn = document.querySelector(".close-btn") as HTMLButtonElement;

      closeBtn?.addEventListener("click", () => {
        cardDetaildActive.style.display = "none";
      });
    };
}

createCard();
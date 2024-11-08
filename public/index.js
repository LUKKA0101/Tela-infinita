"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function featchMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODlhNGYyM2QwMjM0ZmZmYTNlOTAyZGFiYWJmODIwYyIsIm5iZiI6MTcyNjYwODU1Mi44OTUxMTQsInN1YiI6IjY2YjUzOTZiMzA0NTY5NjNjNzllOTk5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbvzd6pZ7I2AhDSqmzCEpdDDhviTDRe400RNefUBtbw",
            },
        };
        const api = yield fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc", options);
        const response = yield api.json();
        return response;
    });
}
function createCard() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield featchMovies();
        const containerCard = document.querySelector(".container-card");
        const movie = data.results;
        movie.forEach((filme) => {
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
        function createCardFloating(filme) {
            return __awaiter(this, void 0, void 0, function* () {
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
                let cardDetaildActive = document.querySelector(".floating-card");
                cardDetaildActive.innerHTML = cardDetaild;
                cardDetaildActive.style.display = 'flex';
                const closeBtn = document.querySelector(".close-btn");
                closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener("click", () => {
                    cardDetaildActive.style.display = "none";
                });
            });
        }
        ;
    });
}
createCard();

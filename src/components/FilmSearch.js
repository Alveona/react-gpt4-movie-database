// src/components/FilmSearch.js

import React, { useState } from 'react';
import { API_KEY } from '../config';

const FilmSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [films, setFilms] = useState([]);

  const searchFilms = async () => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encodeURIComponent(keyword)}`, {
      headers: {
        'X-API-KEY': API_KEY
      }
    });
    const data = await response.json();
    setFilms(data.films);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchFilms();
  };

  return (
    <div>
      <h1>Films search</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search films..."
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films.map(film => (
            <li key={film.filmId} className="film-card">
                <img src={film.posterUrlPreview} alt={film.nameRu} />
                <div>
                    <h3>{film.nameRu}</h3>
                    <p>{film.nameEn}</p>
                    <p>Year: {film.year}</p>
                    <p>Genres: {film.genres.map(genre => genre.genre).join(', ')}</p>
                    <p>Rating: {film.rating}</p>
                </div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmSearch;

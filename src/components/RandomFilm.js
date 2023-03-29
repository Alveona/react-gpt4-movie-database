// src/components/RandomFilm.js

import React, { useState, useEffect } from 'react';
import { API_KEY } from '../config';

const RandomFilm = () => {
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetchRandomFilm();
  }, []);

  const fetchRandomFilm = async () => {
    const randomFilmId = Math.floor(Math.random() * (123456 - 1000 + 1)) + 1000;
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${randomFilmId}`, {
      headers: {
        'X-API-KEY': API_KEY
      }
    });
    const data = await response.json();
    setFilm(data);
  };

  return (
    <div>
      <h1>Random Film</h1>
      {film && (
        <div className="film-card">
            <img src={film.posterUrlPreview} alt={film.nameRu} />
            <div>
                <h3>{film.nameRu}</h3>
                <p>{film.nameEn || film.nameOriginal}</p>
                <p>Year: {film.year}</p>
                <p>Genres: {film.genres.map(genre => genre.genre).join(', ')}</p>
                <p>Rating: {film.ratingKinopoisk}</p>
            </div>
        </div>
      )}
      <button className="random-film-button" onClick={fetchRandomFilm}>
        Get another random film
    </button>
    </div>
  );
};

export default RandomFilm;

// src/components/Top100.js

import React, { useState, useEffect } from 'react';
import { API_KEY } from '../config';

const Top100 = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTop100Films();
  }, []);

  const fetchTop100Films = async () => {
    const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
      headers: {
        'X-API-KEY': API_KEY
      }
    });
    const data = await response.json();
    setFilms(data.films);
  };

  return (
    <div>
      <h1>Top 100 Films</h1>
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

export default Top100;

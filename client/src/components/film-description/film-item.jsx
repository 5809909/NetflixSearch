import React from 'react';

export function FilmItem({film}) {
    return (

            <div className="film-item-card">
                <a href={`/film/${film.title}`}><img className="film-item-card__image" src={film.image} alt={film.title}/> </a>

                <div className="film-item-card__text">
                    <a href={`/film/${film.title}`} className="film-item-card__title">{film.title} </a>
                    <a href={`/film/${film.year}`} className="film-item-card__year">{film.year}  </a>
                </div>

                <a href={`/film/${film.genre}`} className="film-item-card__genre">{film.genre} </a>
            </div>

    );
}


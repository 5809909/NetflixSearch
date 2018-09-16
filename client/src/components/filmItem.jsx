import React from 'react';
import { Link } from 'react-router-dom';

export function FilmItem({ film }) {
    return (
        <div className="mdc-card">
            <div className="mdc-card__horizontal-block">
                <img src={film.image} alt={film.title} />
                <section className="mdc-card__primary">
                    <h2 className="mdc-card__title mdc-card__title--large">{film.title}</h2>
                    <p className="mdc-card__subtitle">{film.genre}</p>
                    <p className="mdc-card__subtitle">{film.year}</p>
                </section>
            </div>
            <section className="mdc-card__actions">
                <Link to={`/film/${film.title}`} className="mdc-button mdc-card__action">Подробнее</Link>
            </section>
        </div>
    );
}


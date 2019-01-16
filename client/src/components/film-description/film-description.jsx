import React from "react";
import {Header} from "../header";
import {HEADER_TEXT} from "../../constants";
import filmProp from '../../data/film.json';
import {SearchButton} from "../search-container/search-button";
import styles from './film-description.css'


export const FilmDescription = () => {
    const film = filmProp[0];
    return (
        <div className="film-description">

            <div className="film-description__header">
                < Header text={HEADER_TEXT}/>
                < SearchButton className="search-btn-return" link="/"/>
            </div>

            <div className="film-description-main">
                <img className="film-image" src={film.image} alt={film.title}/>

                <div className="film-info">
                    <div className="film-info__title">
                        {film.title}
                        <span className="film-info__rating">
								{film.rating}
							</span>
                    </div>

                    <div className="film-info__genre">
                        {film.genre}
                    </div>

                    <div className="film-info__year">
                        {film.year}
                        <span className="film-info__duration">
							{film.duration}
                        </span>
                    </div>

                    <div className="film-info__description">
                        {film.description}
                    </div>

                    <div className="film-info__director">
                        Director: {film.director}
                    </div>

                    <div className="film-info__cast">
                        Cast: {film.cast}
                    </div>

                </div>
            </div>
        </div>
    );
};

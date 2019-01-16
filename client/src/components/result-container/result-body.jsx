import React from 'react';
import {FilmItem} from "../film-description/film-item";

export const ResultBody = (props) => {
    const data = props.data;

    return (!props.count) ? (
            <p className="result-body-text">
                No films found
            </p> )
        : (
            <div className="result-body-cards">

                {data.map((film, index) =>

                    <div key={index}>
                        <FilmItem film={film}/>
                    </div>)}
            </div>
        )

};

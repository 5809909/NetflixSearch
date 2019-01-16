import React from "react";
import {FOOTER_TEXT} from "../constants";
import {Footer} from "../components/footer";
import films from '../data/director.json';
import {ResultContainer} from "../components/result-container/result-container.jsx";
import {FilmDescription} from "../components/film-description/film-description.jsx";


export const Film = () => {

    return (

        <div className="app">
            <FilmDescription/>
            <ResultContainer text="Films by Lawrence Guterman" count={9} data={films}/>
            <Footer text={FOOTER_TEXT}/>
        </div>

    );
};


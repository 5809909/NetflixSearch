import React from "react";
import {Footer} from "../components/footer";
import {FOOTER_TEXT} from "../constants";
import films from '../data/films.json';
import {SearchContainer} from "../components/search-container/search-container";
import {ResultContainer} from "../components/result-container/result-container.jsx";

export const Search = () => {

    return (

        <div className="app">
            <SearchContainer/>
            <ResultContainer text="9 films found" count={9} data={films} sort="release date"/>
            <Footer text={FOOTER_TEXT}/>
        </div>

    );
};


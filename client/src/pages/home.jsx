import React from "react";
import {Footer} from "../components/footer";
import {FOOTER_TEXT} from "../constants";
import {SearchContainer} from "../components/search-container/search-container";
import {ResultContainer} from "../components/result-container/result-container.jsx";

export const Home = () => {

    return (

        <div className="app">
            <SearchContainer/>
            <ResultContainer/>
            <Footer text={FOOTER_TEXT}/>
        </div>
    );
};




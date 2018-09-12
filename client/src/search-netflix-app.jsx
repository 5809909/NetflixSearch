import React, {Component} from "react";
import styles from './components/css/styles.css'
import { Footer } from "./components/footer.jsx";
import Container from "./containers/search-container";
import {ResultContainer} from "./containers/result-container.jsx";



export const SearchNetflixApp = () => {

    return (
        <div className="app">
            < Container />
            < ResultContainer />
            < Footer />
        </div>
    );
};


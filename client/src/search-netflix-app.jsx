import React from "react";
import styles from './components/css/styles.css'
import { Footer } from "./components/footer";
import {ResultContainer} from "./containers/result-container";
import {SearchContainer} from "./containers/search-container";
import {Header} from "./components/header";

export const SearchNetflixApp = () => {

    return (
        <div className="app">
          <div className="search-container">
            < Header/>
            < SearchContainer/>
          </div>
            < ResultContainer />
            < Footer />
        </div>
    );
};




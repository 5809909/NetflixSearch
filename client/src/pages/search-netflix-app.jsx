import React from "react";
import styles from './components/css/styles.css'
import { Footer } from "./components/footer";
import { ResultContainer } from "./containers/result-container";
import { SearchContainer } from "./containers/search-container";
import { Header } from "./components/header";
import { HEADER_TEXT } from "./constants";

export const SearchNetflixApp = () => {

    return (
        <div className="app">
          <div className="search-container">
            < Header text={HEADER_TEXT}/>
            < SearchContainer/>
          </div>
            < ResultContainer />
            < Footer text={HEADER_TEXT}/>
        </div>
    );
};




import React from 'react';
import {SearchForm} from "../components/search-form.jsx";
import {ResultList} from "./result-container.jsx";
import {HEADER_TEXT} from "../constants";

const SearchContainer = () => {
    return (
        <div className="search-container">
            <p className="header">{HEADER_TEXT}</p>
            < SearchForm />

        </div>
    )
};

export default SearchContainer ;
import React from "react";
import {HEADER_TEXT} from "../../constants";
import {Header} from "../header";
import {SearchInput} from "./search-input";
import {SearchButton} from "./search-button";
import SearchSortRadio from "./search-sort-radio";
import styles from './search-container.css'

export const SearchContainer = () => {

    return (

        <div className="search-container">

            < Header text={HEADER_TEXT}/>

            <div className="search-container__form">
                <p>FIND YOUR MOVIE</p>

                < SearchInput/>

                <div className="search-container__sort-form">
                    < SearchSortRadio/>
                    < SearchButton className="search-container__search-btn" link="/search"/>
                </div>

            </div>
        </div>
    );
};
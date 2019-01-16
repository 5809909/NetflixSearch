import React from 'react';
import Link from "react-router-dom/es/Link";

export const SearchButton = (props) => {

    return (
        <Link to={props.link}>
            <button className={props.className}>SEARCH</button>
        </Link>
    )
};
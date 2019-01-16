import React from "react";
import {ResultLine} from "./result-line.jsx.js";
import {ResultBody} from "./result-body";
import styles from './result-container.css'

export const ResultContainer = (props) => {

    const {text, count, data, sort} = props;
    return (
        <div className="result-container">
            < ResultLine text={text} sort={sort}/>
            < ResultBody count={count} data={data}/>
        </div>
    );
};
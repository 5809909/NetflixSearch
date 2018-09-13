import React, {Component} from 'react';
import {ResultLine} from "../components/result-line";



export class ResultContainer extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="result-container">
               < ResultLine />
                <p className="result-text">
                  No films found
                </p>

            </div>
        )
    }
}
import React, {Component} from 'react';

export class SearchForm extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="search-form">
                <p>FIND YOUR MOVIE</p>
                <input
                    className="search-input"
                    placeholder="Enter search text"
                />
                <div className="sort-form">
                    <span>SEARCH BY </span>

                        <button className="title-btn sort-btn">TITLE</button>
                        <button className="director-btn sort-btn">DIRECTOR</button>

                    <button className="search-btn">SEARCH</button>
                </div>
            </div>
        )
    }
}
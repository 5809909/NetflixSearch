import React from 'react';

export const ResultLine = (props) => {

        return (
            (!props.sort) ? (
                    <div className="result-container__line">

                        <div className="result-count">
                            {props.text}
                        </div>

                    </div>
                )
                : (
                    <div className="result-container__line">

                        <div className="result-count">
                            {props.text}
                        </div>

                        < div className="result-filter">
                            < span> Sort by </span>
                            < span className="result-filter__release-date_red"> release date </span>
                            < span className="result-filter__rating"> rating </span>
                        </div>

                    </div>
                )
        )
    }
;
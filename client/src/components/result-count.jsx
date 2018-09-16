import React from 'react';

export const ResultCount = (props) => {

        return (props.count) ? (<div className="result-count">
                <span>{props.count} films found</span>
            </div> )
            : (<div/> )

    }
;
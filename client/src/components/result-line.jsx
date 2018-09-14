import React, { Component } from 'react';

export class ResultLine extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="result-line">
				<div className="result-count">
					<span >7 movies found</span>
				</div>
				<div className="results-filter">
					<span> Sort by </span>
					<span> release date </span>
					<span> raiting </span>
				</div>
			</div>

		)
	}
}
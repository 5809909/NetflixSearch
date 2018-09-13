import React, {Component} from 'react';

export class SearchSortType extends Component {
	constructor(props) {
		super(props);

	}


	render() {
		return (
			<div >
				<span>SEARCH BY </span>
				<button className="title-btn sort-btn">TITLE</button>
				<button className="director-btn sort-btn">DIRECTOR</button>
			</div>
		)
	}
}
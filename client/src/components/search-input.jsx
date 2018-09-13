import React, {Component} from 'react';

export class SearchInput extends Component {
	constructor(props) {
		super(props);

	}


	render() {
		return (
			<input
				className="search-input"
				placeholder="Enter search text"
			/>
		)
	}
}
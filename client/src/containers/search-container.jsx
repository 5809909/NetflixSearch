import React, {Component} from 'react';
import {SearchInput} from "../components/search-input";
import {SearchButton} from "../components/search-button";
import {SearchSortType} from "../components/search-sort-radiobtn";

export class SearchContainer extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="search-form">
				<p>FIND YOUR MOVIE</p>
				< SearchInput/>
				<div className="sort-form-type">
					< SearchSortType/>
					< SearchButton/>
				</div>
			</div>
		)
	}
}
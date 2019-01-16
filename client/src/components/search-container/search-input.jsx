import React from 'react';

export const SearchInput = (props) => {

	return (
		<input
			className="search-container__input"
			placeholder="Enter search text"
			value = {props.text}
		/>
	)
};

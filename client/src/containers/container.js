import React from 'react';
import {SearchForm} from "../components/form/search-form.jsx";
import {ResultList} from "../components/form/result-list.jsx";

const Container = () => {
    return (
        <div>
            < SearchForm />
            < ResultList />
        </div>
    )
};

export default Container  ;
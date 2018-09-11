import React, {Component} from "react";
import styles from './components/css/styles.css'
import { Header } from "./components/header.jsx";
import { Footer } from "./components/footer.jsx";
import Container from "./containers/container";



export const SearchNetflixApp = () => {

    return (
        <div className="app">
            <Header />
            <Container />
            <Footer />
        </div>
    );
};


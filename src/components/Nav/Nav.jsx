import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";


export default function Nav(props) {
    let {onSearch, random} = props;
    return (
        <div className={styles.container}>
            <SearchBar onSearch={onSearch} random={random} />
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
    )
}

//props: {props, oneSearch, random}
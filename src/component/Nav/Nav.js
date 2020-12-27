import React, { useState, useContext } from 'react';
import '../../App.css';
import {MovieContext} from '../MovieContext/MovieContext';

const Nav = () => {

    const [movies,setMoves] = useContext(MovieContext);

    return (
        <div className='Nav-Class'>
            <h3>Spiro.Redux</h3>
            <p>Number of Movies: {movies.length}</p>
        </div>
    );
}

export default Nav;
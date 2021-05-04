import React, { Component } from 'react';
import './MovieCard.css';
import Button from '../../components/Button/Button';

class MovieCard extends Component {
    render() {
        return(
            <div>
                <div className='movie-card'>
                    <h4>Results for</h4>
                    <ul>
                        <li>Title (Year) <Button /></li>
                    </ul>
                </div>
                {/* <div>
                    <Button />
                </div> */}
            </div>
        );
    }
}

export default MovieCard;
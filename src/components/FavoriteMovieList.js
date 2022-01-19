import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = ({favorites, removeFavorite}) => {
    
    const handleClick = (id) => {
        removeFavorite(id);
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => handleClick(movie.id)}><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStatesToProps = state => {
    return {
        favorites: state.favoriteReducer.favorites
    }
}

export default connect(mapStatesToProps, {removeFavorite})(FavoriteMovieList);
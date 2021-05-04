import React, { Component } from 'react';
import './App.css';
import { getMovies } from '../../services/movies';
import SearchBar from '../../components/SearchBar/SearchBar';
import MoviesListPage from '../MoviesListPage/MoviesListPage';


class App extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    const movies = await getMovies();
    // this.setState({movies: movies})
    console.log(movies);
  }
  
  render() {
    return (
      <div className="App">
        <main>
          <h1> The Shoppies</h1>
          <SearchBar />
          <MoviesListPage />
        </main>

      </div>
    );
  }
  
}

export default App;

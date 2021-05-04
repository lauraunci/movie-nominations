export function getMovies() {
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    const moviesData = `http://www.omdbapi.com/?s=Ram&apikey=${API_KEY}`;
    return fetch (moviesData, {mode: 'cors'})
    .then(res => res.json())
}

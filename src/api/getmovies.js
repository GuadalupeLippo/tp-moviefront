const API = 'http://localhost:3000';

export const GetMovies = () => fetch(`${API}/movie`);
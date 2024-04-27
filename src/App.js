import { GetMovies} from './api/getmovies';
import { useState, useEffect } from 'react';
import { MovieCard } from './components/card-movie';
import './App.css';

function App() {

const [movies, setMovies] = useState([]);
useEffect(()=>{
  GetMovies()
  .then((res)=> res.json())
  .then((res)=>setMovies(res))
},[]);

  return (
    <div className='container'>
      <header className="App-header">
       <h2>MOVIES</h2>
      </header>
      <div className="app">
          {movies.map((movie)=>(<MovieCard movie={movie} key={movie.id}/>))}
       
      </div>
    </div>
  );
}

export default App;

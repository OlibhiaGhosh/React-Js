import { movies } from './data/movies'
import Movielist from './Movielist';
console.log(Movielist);
const fetchmovies= () =>{
    return movies;
  }

function MovieContainer() {
    const moviesdata= fetchmovies();
    return(
        <>
         <div className='Movieapp'>
            <h2>Movies</h2>
            <h3>Welcome to the world of movies</h3>
            <ul className='Movielist'>
                {
                moviesdata.map((movie) => (
                    <Movielist key={movie.id} movie={movie} />
                ))
                }
            </ul>
         </div>
        </>
    )

}

export default MovieContainer;
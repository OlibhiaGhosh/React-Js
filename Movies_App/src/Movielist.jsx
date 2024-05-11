const Movielist= ({movie}) => {
    return(
        <>
         <li key={movie.id} className="movies">
            <img src={movie.poster} alt={movie.title} />
            <p>Name: {movie.title} Release year: {movie.year} Director: {movie.director}</p>
         </li>
        </>
    )

}
export default Movielist;
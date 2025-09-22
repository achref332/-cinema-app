import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {movies.length > 0 ? (
        movies.map((m, index) => <MovieCard key={index} movie={m} />)
      ) : (
        <p>Aucun film trouvé...</p>
      )}
    </div>
  );
}

export default MovieList;

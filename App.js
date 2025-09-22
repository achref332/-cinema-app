import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief enters people's dreams to steal secrets.",
      posterURL: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Explorers travel through a wormhole in space.",
      posterURL: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      rating: 4,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  // Ajouter un film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filtrer les films
  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      m.rating >= filterRate
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>🎬 Ma Bibliothèque de Films</h1>

      {/* Filtre */}
      <Filter setFilterTitle={setFilterTitle} setFilterRate={setFilterRate} />

      {/* Liste des films */}
      <MovieList movies={filteredMovies} />

      {/* Bouton pour ajouter un film (exemple simple) */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() =>
            addMovie({
              title: "New Movie",
              description: "Nouvelle description",
              posterURL: "https://via.placeholder.com/200",
              rating: 3,
            })
          }
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ➕ Ajouter un film
        </button>
      </div>
    </div>
  );
}

export default App;

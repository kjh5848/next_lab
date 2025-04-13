import axios from "axios";
import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"

export const metadata = {
  title: "Home"
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  console.log("I fetching");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(API_URL);
  return response.data;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
        key={movie.id}
        title={movie.title}
        id={movie.id}
        poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}

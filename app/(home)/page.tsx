import axios from "axios";
import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"
import { API_URL } from "../../lib/constants";

export const metadata = {
  title: "Home"
};

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

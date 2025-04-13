import Link from "next/link";
import styles from "../styles/movie.module.css"


interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: MovieProps) {
  return (
    <div className={styles.movie}>
      <Link 
        href={`/movies/${id}`}
        className={styles.link}
      >
        <img src={poster_path} alt={title} className={styles.poster} />
        <h3 className={styles.title}>{title}</h3>
      </Link>
    </div>
  );
}

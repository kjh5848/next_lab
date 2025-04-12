import axios from "axios";
import { API_URL } from "../app/(home)/page";
import { unstable_cache } from "next/cache";
import styles from "../styles/movie-info.module.css"

const getMovie = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return res.json();
};
//fetch를 권장


// // Next.js 15에서는 `unstable_cache`가 안정화되어 사용 가능합니다
// const getMovie = unstable_cache(
//   async (id: string) => {
//     const res = await axios.get(`${API_URL}/${id}`);
//     return res.data;
//   },
//   // 캐시 키 배열 - 이 키가 변경되면 캐시가 무효화됩니다
//   ["movie-data"],
//   // 캐싱 옵션
//   {
//     revalidate: 3600, // 1시간마다 재검증
//     tags: ["movie"], // 캐시 태그 지정
//   }
// );

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 >⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"} >HomePage &rarr;</a>
      </div>
    </div>
  );
}

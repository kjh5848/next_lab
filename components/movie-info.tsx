import axios from "axios";
import { API_URL } from "../app/(home)/page";
import { unstable_cache } from "next/cache";
import styles from "../styles/movie-info.module.css"

export const getMovie = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return res.json();
};
//fetch를 권장

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  
  // 포스터 이미지 URL 완성
  const posterUrl = movie.poster_path.startsWith('http') 
    ? movie.poster_path 
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  
  // 배경 이미지 URL 완성
  const backdropUrl = movie.backdrop_path;
  
  // 출시일 포맷팅
  const releaseDate = new Date(movie.release_date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // 장르 문자열 생성
  const genres = movie.genres.map(genre => genre.name).join(', ');
  
  // 상영 시간 포맷팅 (시간과 분)
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const runtime = `${hours}시간 ${minutes}분`;
  
  return (
    <>
      {/* 배경 이미지 오버레이 */}
      {backdropUrl && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${backdropUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            zIndex: -1,
          }}
        />
      )}
      
      <div className={styles.container}>
        <img 
          className={styles.poster} 
          src={posterUrl} 
          alt={movie.title} 
        />
        
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          {movie.tagline && (
            <p className={styles.tagline}>"{movie.tagline}"</p>
          )}
          
          <div className={styles.meta}>
            <span className={styles.rating}>⭐ {movie.vote_average.toFixed(1)}</span>
            <span className={styles.year}>{movie.release_date.split('-')[0]}</span>
            <span className={styles.runtime}>{runtime}</span>
          </div>
          
          <div className={styles.details}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>개요</h3>
              <p>{movie.overview}</p>
            </div>
            
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>장르</h3>
              <p>{genres}</p>
            </div>
            
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>개봉일</h3>
              <p>{releaseDate}</p>
            </div>
            
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>제작 국가</h3>
              <p>{movie.production_countries.map(country => country.name).join(', ')}</p>
            </div>
            
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>제작사</h3>
              <div className={styles.companies}>
                {movie.production_companies.map(company => (
                  <span key={company.id} className={styles.company}>
                    {company.name}
                  </span>
                ))}
              </div>
            </div>
            
            {movie.homepage && (
              <a 
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.homepage}
              >
                공식 홈페이지 방문하기 &rarr;
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
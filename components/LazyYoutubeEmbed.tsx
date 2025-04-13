'use client';

import { useState } from 'react';
import styles from "../styles/movie-videos.module.css";

export function LazyYoutubeEmbed({ videoKey, title, height = "100%" }: { videoKey: string, title: string, height?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  // 썸네일 이미지 URL (maxresdefault가 불안정할 수 있어 mqdefault를 대체로 사용)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`;
  
  return (
    <div className={styles.videoWrapper} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      {!isLoaded && (
        <div 
          onClick={() => setIsLoaded(true)}
          style={{ 
            backgroundImage: `url(${thumbnailUrl})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          <div 
            style={{ 
              width: '70px', 
              height: '50px', 
              backgroundColor: 'red', 
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '20px solid white', marginLeft: '5px' }}></div>
          </div>
          <span style={{ position: 'absolute', bottom: '10px', left: '10px', color: 'white', backgroundColor: 'rgba(0,0,0,0.7)', padding: '3px 6px', borderRadius: '3px', fontSize: '12px' }}>
            클릭하여 재생
          </span>
        </div>
      )}
      
      {isLoaded && (
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
// This is a server component file
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";
import { Suspense } from "react";
import { LazyYoutubeEmbed } from "./LazyYoutubeEmbed"; // Import from separate file

// 비디오 타입 정의
interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
  iso_639_1: string;
}

// 비디오 타입별 그룹화를 위한 인터페이스
interface VideoGroups {
  [key: string]: Video[];
}

// 비디오 타입 한글 매핑
const videoTypeKorean = {
  "Trailer": "예고편",
  "Teaser": "티저",
  "Clip": "클립",
  "Featurette": "피처렛",
  "Behind the Scenes": "비하인드 장면",
  "Other": "기타"
};

async function getVideos(id: string) {
  try {
    // Use force-cache to improve performance
    const res = await fetch(`${API_URL}/${id}/videos`, { cache: "force-cache" });
    if (!res.ok) {
      throw new Error(`Failed to fetch videos: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}

// Server component
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  // 비디오가 없는 경우 처리
  if (!videos || videos.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Videos</h2>
        <p className={styles.noVideos}>No videos available for this movie.</p>
      </div>
    );
  }

  // 비디오를 타입별로 그룹화
  const groupedVideos: VideoGroups = videos.reduce(
    (groups: VideoGroups, video: Video) => {
      const type = video.type || "Other";
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(video);
      return groups;
    },
    {}
  );

  // 주요 비디오 타입을 우선적으로 표시
  const displayOrder = [
    "Trailer",
    "Teaser",
    "Clip",
    "Featurette",
    "Behind the Scenes",
    "Other",
  ];

  // 최신 영상이 먼저 오도록 정렬 함수
  const sortByDate = (a: Video, b: Video) => {
    return (
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>영상</h2>

      {/* 비디오 타입별로 섹션 생성 */}
      {displayOrder.map((type) => {
        const videosOfType = groupedVideos[type];
        if (!videosOfType || videosOfType.length === 0) return null;

        const typeKorean = videoTypeKorean[type] || type;

        return (
          <div key={type} className={styles.videoSection}>
            <h3 className={styles.sectionTitle}>{typeKorean}</h3>

            {/* 첫 번째 비디오는 크게 표시 (주로 최신 예고편) */}
            {type === "Trailer" && videosOfType.sort(sortByDate)[0] && (
              <div className={styles.featuredVideo}>
                <Suspense fallback={<div style={{ width: '100%', height: '0', paddingBottom: '56.25%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}><span style={{ position: 'absolute' }}>예고편 로딩중...</span></div>}>
                  <LazyYoutubeEmbed 
                    videoKey={videosOfType[0].key} 
                    title={videosOfType[0].name} 
                    height="500px"
                  />
                </Suspense>
                <h4 className={styles.videoTitle}>{videosOfType[0].name}</h4>
                <p className={styles.publishDate}>
                  {new Date(videosOfType[0].published_at).toLocaleDateString(
                    "ko-KR",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              </div>
            )}

            {/* 비디오 그리드 */}
            <div className={styles.videoGrid}>
              {videosOfType
                .sort(sortByDate)
                // 트레일러의 경우 첫 번째는 이미 크게 표시했으므로 두 번째부터
                .slice(type === "Trailer" ? 1 : 0)
                .map((video) => (
                  <div key={video.id} className={styles.videoCard}>
                    <Suspense fallback={<div style={{ width: '100%', paddingBottom: '56.25%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}><span style={{ position: 'absolute' }}>영상 로딩중...</span></div>}>
                      <LazyYoutubeEmbed 
                        videoKey={video.key} 
                        title={video.name} 
                      />
                    </Suspense>
                    <h4 className={styles.videoTitle}>{video.name}</h4>
                    <p className={styles.publishDate}>
                      {new Date(video.published_at).toLocaleDateString(
                        "ko-KR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
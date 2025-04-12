import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;//next 15버전 부터는 await를 써줘야 함.
  return (
    <div className="container mx-auto p-4">
      <Suspense fallback={<h1 className="text-2xl">Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1 className="text-2xl">Loading movie videos...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

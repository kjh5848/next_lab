import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";
import { Metadata } from "next";

interface PageProps  {
  params: Promise<{ id: string }> ;
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const movie = await getMovie(id)
  return{
    title: movie.title
  }
  
}


export default async function Page({ params }: PageProps ) {
  const { id } = await params;
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

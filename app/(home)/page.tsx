import axios from 'axios'
import Link from 'next/link'

export const metadata = {
    title: "Home"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    console.log("I fetching")
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await axios.get(API_URL)
    return response.data
}

export default async function HomePage() {
    const movies = await getMovies()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <ul>{movies.map((movie: any) => (
                <li key={movie.id}>
                    <Link href={`movies/${movie.id}`}   className="border p-4 rounded-lg">
                    <h2 className="text-xl font-bold">{movie.title}</h2>
                    </Link>
                </li>
            ))}</ul>
        </div>
    )
}
import axios from "axios"
import { API_URL } from "../app/(home)/page"

async function getVideos(id:string) {
    const res = await axios.get(`${API_URL}/${id}/videos`)
    return res.data
}

export default async function MovieVideos({id} : {id:string}) {
    const videos = await getVideos(id)
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mt-5">Videos</h2>
            <div className="grid grid-cols-1 gap-4 mt-4">
                {videos.map((video: any) => (
                    <div key={video.id}>
                        <h3>{video.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}


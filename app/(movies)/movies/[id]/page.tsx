import axios from "axios";
import { API_URL } from "../../../(home)/page";

async function getMovie(id:string) {
  const res = await axios.get(`${API_URL}/${id}`)
  return res.data
 
}

export default function Page({
  params 
  }: {
  params: { id: string }
  }) {
    return <div>Movie {params.id}</div>
}
  

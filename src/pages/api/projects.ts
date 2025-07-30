import type { APIRoute } from "astro";
import axios from "axios";
import { API_URL } from "astro:env/server"


export const GET: APIRoute = async ({params}) => {
    const data = (await axios.get(`${API_URL}/projects`)).data
    console.log(data)

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    })

}
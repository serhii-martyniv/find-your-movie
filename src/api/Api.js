import React from "react";

export async function getMovies() {
    const response = await fetch(`https://my-json-server.typicode.com/serhii-martyniv/find-your-movie/movieList`)

    return response.json()
}
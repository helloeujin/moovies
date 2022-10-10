const API_KEY = "5e53d06765d63c2ad8fe05935854b26d";
const BASE_URL = "https://api.themoviedb.org/3"; 

export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface BaseResponse {
    page: number;
    total_results: number;
    total_pages: number;
}

export interface MovieResponse extends BaseResponse {
    result: Movie[]
}

const trending = () =>
    fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then(
        (res) => res.json()
    );  

const upcoming = () => 
    fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`).then(
        (res) => res.json());

const nowPlaying = () => 
    fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`).then(
        (res) => res.json())

export const moviesAPI = {trending, upcoming, nowPlaying}
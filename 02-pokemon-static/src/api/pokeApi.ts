import axios from "axios";

const pokeApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_POKEMON_BASE_URL
});

export default pokeApi;
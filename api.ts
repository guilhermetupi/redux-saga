import axios from "axios";

const URL_BASE = "https://pokeapi.co/api/v2";

export const api = axios.create({
  baseURL: URL_BASE,
  headers: {
    "Content-Type": "application/json image/jpeg",
    accept: "application/json image/jpeg",
  },
});

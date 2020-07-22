const BASE_URL = "http://www.localhost:3000";

const getAllMovies = () => {
  return fetch(BASE_URL + "/movies").then((r) => r.json());
};

export default {
  getAllMovies: getAllMovies,
};

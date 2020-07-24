const BASE_URL = "http://www.localhost:3000";

const getAllMovies = (searchTerm) => {
  return fetch(BASE_URL + "/movies/" + searchTerm).then((r) => r.json());
};

export default {
  getAllMovies: getAllMovies,
};

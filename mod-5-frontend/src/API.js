const BASE_URL = "http://www.localhost:3000";

const signUpURL = `${BASE_URL}/users`;

export const SIGN_IN_URL = `${BASE_URL}/sign-in`;

const getAllMovies = (searchTerm) => {
  return fetch(BASE_URL + "/movies/" + searchTerm).then((r) => r.json());
};

export const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/ld+json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(url, configurationObject);
};

const signUp = (data) =>
  post(signUpURL, data)
    .then((resp) => resp.json())
    .catch((error) => console.log(error.message));

export default {
  getAllMovies: getAllMovies,
  signUp,
};

// export const reviewPost = () => {
//   fetch(`http://localhost:3000/reviews`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newReview),
//   });
// };

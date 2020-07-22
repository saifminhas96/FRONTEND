import React from "react";
import Search from "./Search";
import MovieCollection from "./MovieCollection";
import { Container } from "semantic-ui-react";

import API from "../API";

class Homepage extends React.Component {
  state = {
    movies: [],
    userSearch: "",
  };

  componentDidMount() {
    debugger;
    API.getAllMovies().then((movies) => {
      this.setState({ movies });
    });
  }

  updateUserSearch = (e) => {
    this.setState({ userSearch: e.target.value });
  };

  // filterMovies = () => {
  //   return this.state.movies.filter((movie) =>
  //     movie.title.includes(this.state.userSearch)
  //   );
  // };

  render() {
    return (
      <Container>
        <h1>Movie Database</h1>
        <br />
        <Search
          updateUserSearch={this.updateUserSearch}
          userSearch={this.state.userSearch}
        />
        <br />
        <MovieCollection
          movies={this.state.movies}
          // movies={this.filterMovies()}
        />
      </Container>
    );
  }
}

export default Homepage;

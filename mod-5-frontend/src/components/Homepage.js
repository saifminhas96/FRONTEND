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
    // API.getAllMovies().then((movies) => {
    //   this.setState({ movies: movies.Search });
    // });
    // this.submitSearch();
  }

  submitSearch = (e) => {
    e.preventDefault();
    //if (this.state.userSearch) {
    API.getAllMovies(this.state.userSearch).then((movies) => {
      if (movies.Search) {
        this.setState({ movies: movies.Search });
      } else {
        this.setState({ movies: [] });
      }
    });
    //}
  };

  updateUserSearch = (e) => {
    this.setState({ userSearch: e.target.value });
  };

  // filterMovies = () => {
  //   return this.state.movies.filter((movie) =>
  //     movie.Title.includes(this.state.userSearch)
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
          submitSearch={this.submitSearch}
        />
        <br />
        <MovieCollection
          movies={this.state.movies}
          selectMovie={this.props.selectMovie}
          // movies={this.filterMovies()}
        />
      </Container>
    );
  }
}

export default Homepage;

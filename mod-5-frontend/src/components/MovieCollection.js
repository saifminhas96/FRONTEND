import React from "react";
import { Card } from "semantic-ui-react";
import MovieCard from "./MovieCard";

class MovieCollection extends React.Component {
  // renderMovieCards = () => {
  //   return this.props.movies.map((m) => (
  //     <MovieCard key={m.id} name={m.Title} year={m.Year} />
  //   ));
  // };
  render() {
    return <Card.Group itemsPerRow={6}>{}</Card.Group>;
  }
}

export default MovieCollection;

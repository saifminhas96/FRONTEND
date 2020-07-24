import React from "react";
import { Card } from "semantic-ui-react";
import MovieCard from "./MovieCard";

class MovieCollection extends React.Component {
  renderMovieCards = () => {
    if (!this.props.movies.length)
      return <div>Sorry! But we can't find a movie by that name!</div>;

    return this.props.movies.map((m) => (
      <MovieCard
        selectMovie={this.props.selectMovie}
        key={m.id}
        movie={{
          title: m.Title,
          poster: m.Poster,
          year: m.Year,
        }}
      />
    ));
  };

  render() {
    return (
      <Card.Group
        itemsPerRow={3}
        style={{
          height: "400px",
          width: "400x",
        }}
      >
        {this.renderMovieCards()}
      </Card.Group>
    );
  }
}

export default MovieCollection;

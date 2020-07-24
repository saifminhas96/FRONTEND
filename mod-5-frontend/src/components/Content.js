import React from "react";
import Homepage from "./Homepage";
import MovieShowPage from "./MovieShowPage";

class Content extends React.Component {
  state = {
    selectedMovie: null,
  };

  renderContent = () => {
    return this.state.selectedMovie ? (
      <MovieShowPage movie={this.state.selectedMovie} />
    ) : (
      <Homepage selectMovie={this.selectMovie} />
    );
  };

  selectMovie = (movie) => {
    this.setState({ selectedMovie: movie });
  };
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Content;

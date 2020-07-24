import React from "react";

class MovieShowPage extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.movie.title}</h1>
        <h3>{this.props.movie.year}</h3>

        <img alt="poster" src={this.props.movie.poster} />

        <form>
          <label>
            Review:
            <input type="text" review="review" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default MovieShowPage;

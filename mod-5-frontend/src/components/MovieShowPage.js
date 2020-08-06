import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewContainer from "./ReviewContainer";

const REVIEWS_URL = "http://www.localhost:3000/";

// import './MovieShowPage.css'

class MovieShowPage extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    // Get all reviews for this movie
    fetch(REVIEWS_URL + `reviews/${this.props.movie.id}`)
      .then((r) => r.json())
      .then((reviews) => {
        this.setState({ reviews });
      });
  }

  addReview = (review) => {
    this.setState({ reviews: [...this.state.reviews, review] });
  };

  render() {
    return (
      <div id="movie-show-top">
        <div id="movie-details">
          <h1>{this.props.movie.title}</h1>
          <h3>{this.props.movie.year}</h3>

          <img alt="poster" src={this.props.movie.poster} />
        </div>

        <div id="movie-show-bottom">
          <ReviewForm
            addReview={this.addReview}
            movieId={this.props.movie.id}
          />
          <br />
          <br />
          <ReviewContainer reviews={this.state.reviews} />
        </div>
      </div>
    );
  }
}

export default MovieShowPage;

import React from "react";
import Review from "./Review";

class ReviewContainer extends React.Component {
  renderReviews = () => {
    return this.props.reviews.map((r) => {
      return <Review key={r.id} review_body={r.review_body} />;
    });
  };
  render() {
    return (
      <div id="review-container">
        <h2>Reviews:</h2>
        <ul>{this.renderReviews()}</ul>
      </div>
    );
  }
}

export default ReviewContainer;

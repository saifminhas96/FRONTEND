import React from "react";
import { Form } from "semantic-ui-react";
// import reviewPost from "../API";

class ReviewForm extends React.Component {
  state = {
    // reviews: [],
    review_body: "",
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // addReview = (review) => {
  //   debugger;
  //   this.setState({ reviews: [...this.state.reviews, review] });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const { review_body } = this.state;
    const newReview = {
      review_body: review_body,
      movie_id: this.props.movieId,
    };
    fetch(`http://localhost:3000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

      body: JSON.stringify(newReview),
    })
      .then((resp) => resp.json())
      .then((review) => {
        this.props.addReview(review);
      })
      .catch((error) => error.message);
  };

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Form.Field
          label="Review this movie."
          control="textarea"
          rows="2"
          name="review_body"
          onChange={(e) => this.handleInputChange(e)}
          value={this.state.review_body}
        />
        <Form.Field label="Submit Review" control="button">
          Submit
        </Form.Field>
      </Form>
    );
  }
}

export default ReviewForm;

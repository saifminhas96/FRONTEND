import React from "react";
import { Card } from "semantic-ui-react";

class MovieCard extends React.Component {
  render() {
    return (
      <Card>
        <div>
          <div className="poster">
            <img alt="poster" src={this.props.movie.poster} />
            <div />
            <div className="content">
              <div className="header">{this.props.movie.title}</div>
              <button onClick={() => this.props.selectMovie(this.props.movie)}>
                Movie Details
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default MovieCard;

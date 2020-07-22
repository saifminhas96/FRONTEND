import React from "react";
import { Card } from "semantic-ui-react";

class MovieCard extends React.Component {
  render() {
    return (
      <Card>
        <div>
          <div className="poster">
            <img alt="poster" />
            <div />
            <div className="content">
              <div className="header">{this.props.title}</div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default MovieCard;

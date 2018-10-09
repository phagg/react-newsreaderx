import React, { Component } from "react";

export default class NewsDetail extends Component {
  render() {
    const { selectedItem } = this.props;
    if (selectedItem) {
      return (
        <div className="card">
          <div className="card-header">
            <p className="lead">{selectedItem.heading}</p>
          </div>
          <div className="card-body">{selectedItem.summary}</div>
        </div>
      );
    }
    return (
      <div className="alert alert-warning">Please select a news article!</div>
    );
  }
}

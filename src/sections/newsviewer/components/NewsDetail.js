import React, { Component } from "react";

export default class NewsDetail extends Component {
  renderImage() {
    const { selectedItem } = this.props;
    if (selectedItem.image) {
      return (
        <div className="card-body m-0 p-0">
          <img src={selectedItem.image} className="img-fluid" alt="news" />
        </div>
      );
    }
    return null;
  }

  renderReadMoreBtn() {
    const { selectedItem } = this.props;
    if (selectedItem.source_url) {
      return (
        <a
          className="btn btn-info btn-sm"
          href={selectedItem.source_url}
          target="_blank" rel="noopener noreferrer"
        >
          READ MORE
        </a>
      );
    }
    return null;
  }

  render() {
    const { selectedItem } = this.props;
    if (selectedItem) {
      return (
        <div className="card">
          {this.renderImage()}
          <div className="card-header">
            <p className="m-0 lead">{selectedItem.heading}</p>
          </div>
          <div className="card-body">
            <p>{selectedItem.summary}</p>
            {this.renderReadMoreBtn()}
          </div>
        </div>
      );
    }
    return (
      <div className="alert alert-warning">Please select a news article!</div>
    );
  }
}


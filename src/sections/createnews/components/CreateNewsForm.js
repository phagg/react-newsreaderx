import React, { Component } from "react";

import TextareaAutosize from "react-autosize-textarea";

export default class CreateNewsForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter heading..."
          />
        </div>
        <div className="form-group">
          <TextareaAutosize
            className="form-control"
            placeholder="Enter summary..."
            rows={2}
          />
        </div>
        <div className="form-group">
          <TextareaAutosize
            className="form-control"
            placeholder="Enter content..."
            rows={2}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-sm btn-info">Save</button>
        </div>
      </React.Fragment>
    );
  }
}

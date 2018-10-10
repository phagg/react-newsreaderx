import React, { Component } from "react";

import TextareaAutosize from "react-autosize-textarea";
import axios from "axios";

const initialState = {
  form: {
    heading: "",
    summary: "",
    body: ""
  }
};

export default class CreateNewsForm extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleSave = this.handleSave.bind(this);

    this.handleChangeHeading = this.handleChangeHeading.bind(this);
    this.handleChangeSummary = this.handleChangeSummary.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
  }

  handleSave(event) {
    event.preventDefault();
    console.log("Clicked submit:", this.state.form);

    const defaultUrl = "https://beta.stockzoom.com/api/v1/unistream/stories/";
    axios
      .post(defaultUrl, this.state.form)
      .then(({ data }) => console.log(data))
      .catch(error => console.log(error));

    // Call method to fake successful request
    const payload = {
      provider: {
        id: 7,
        name: "Börsvärlden",
        slug: "borsvarlden"
      },
      heading:
        "Walmart Canada överväger försäljning av cannabisbaserade produkter",
      summary:
        "Walmart Canada överväger eventuell försäljning av cannabisbaserade produkter. Det rapporterar Reuters.",
      body: null,
      slug:
        "walmart-canada-overvager-forsaljning-av-cannabisbaserade-produkter",
      instruments: [],
      securities: [],
      published_at: "2018-10-10T10:08:18+02:00",
      source_url:
        "https://borsvarlden.com/artiklar/walmart-canada-overvager-forsaljning-av-cannabisbaserade-produkter/?ref=borskollen",
      engagement_count: 0,
      view_count: 0,
      image:
        "https://beta.stockzoom.com/media/story/bvfa-s-retail-0001-960x540_2Q5dsjU.jpg",
      video_url: null,
      form: "RSS",
      entities: []
    };
    this.props.handleNewArticle(payload);
  }

  handleChangeHeading(event) {
    this.setState({
      form: {
        ...this.state.form,
        heading: event.target.value
      }
    });
  }

  handleChangeSummary(event) {
    this.setState({
      form: {
        ...this.state.form,
        summary: event.target.value
      }
    });
  }

  handleChangeBody(event) {
    this.setState({
      form: {
        ...this.state.form,
        body: event.target.value
      }
    });
  }

  render() {
    console.log("CreateNewsForm.state:", this.state);

    return (
      <React.Fragment>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter heading..."
            value={this.state.form.heading}
            onChange={this.handleChangeHeading}
          />
        </div>
        <div className="form-group">
          <TextareaAutosize
            className="form-control"
            placeholder="Enter summary..."
            rows={2}
            value={this.state.form.summary}
            onChange={this.handleChangeSummary}
          />
        </div>
        <div className="form-group">
          <TextareaAutosize
            className="form-control"
            placeholder="Enter content..."
            rows={2}
            value={this.state.form.body}
            onChange={this.handleChangeBody}
          />
        </div>
        <div className="form-group">
          <button onClick={this.handleSave} className="btn btn-sm btn-info">
            Save
          </button>
        </div>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";

import axios from "axios";

import NewsList from "../components/NewsList";

const initialState = {
  list: [],
  next: null
};

class NewsContainer extends Component {
  constructor(props) {
    super(props);

    console.log("In --> constructor...");

    this.state = initialState;

    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentDidMount() {
    // call backend endpoint when component has been mounted
    console.log("In --> componentDidMount...");

    this.fetchData();
  }

  fetchData(url) {
    const defaultUrl =
      "https://beta.stockzoom.com/api/v1/unistream/stories/?page_size=20";
    axios.get(url || defaultUrl).then(({ data }) => {
      this.setState({
        list: [...this.state.list, ...data.results],
        next: data.next
      });
    });
  }

  handleLoadMore() {
    this.fetchData(this.state.next);
  }

  render() {
    console.log("In --> render...");
    return (
      <NewsList list={this.state.list} handleLoadMore={this.handleLoadMore} />
    );
  }
}

export default NewsContainer;

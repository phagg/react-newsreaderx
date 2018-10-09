import React, { Component, Fragment } from "react";

import NewsListItem from "./NewsListItem";

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.handleClickOnLoadMoreBtn = this.handleClickOnLoadMoreBtn.bind(this);
  }

  renderItems() {
    console.log(this.props.handleClickedItem);
    return this.props.list.map(item => (
      <NewsListItem
        item={item}
        key={item.slug}
        handleClickedItem={this.props.handleClickedItem}
      />
    ));
  }

  handleClickOnLoadMoreBtn(event) {
    event.preventDefault();

    console.log("Click click...");

    this.props.handleLoadMore();
  }

  render() {
    console.log("What is this?:", this);
    return (
      <Fragment>
        <ul className="list-group mb-2">{this.renderItems()}</ul>
        <div className="">
          <button
            className="btn btn-primary btn-block"
            onClick={this.handleClickOnLoadMoreBtn}
          >
            Load more
          </button>
        </div>
      </Fragment>
    );
  }
}

export default NewsList;

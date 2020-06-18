import React, { Component } from "react";

import TimeAgo from "react-timeago";


class NewsListItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <li
        className="list-group-item"
        onClick={event => this.props.handleClickedItem(item)}
      >
        <p className="m-0">
            <strong>{item.heading}</strong>
        </p>
        <p className="m-0 text-muted">
            {item.provider} &middot; <TimeAgo date={item.published_at} />
        </p>
      </li>
    );
  }
}

export default NewsListItem;


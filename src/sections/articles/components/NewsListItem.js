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
          <small>
            <strong>{item.heading}</strong>
          </small>
        </p>
        <p className="m-0 text-muted">
          <small>
            {item.provider.name} &middot; <TimeAgo date={item.published_at} />
          </small>
        </p>
      </li>
    );
  }
}

export default NewsListItem;

import React, { Component } from "react";

import axios from "axios";

import NewsList from "../../sections/articles/components/NewsList";
import NewsDetail from "../../sections/newsviewer/components/NewsDetail";
import CreateNewsForm from "../../sections/createnews/components/CreateNewsForm";

const initialState = {
  list: [],
  next: null,
  selectedItem: null
};

class NewsParentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.handleClickedItem = this.handleClickedItem.bind(this);
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

  handleClickedItem(item) {
    this.setState({ selectedItem: item });
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-3" style={styles.leftColumnStyle}>
          <NewsList
            list={this.state.list}
            handleLoadMore={this.handleLoadMore}
            handleClickedItem={this.handleClickedItem}
          />
        </div>
        <div className="col-md-6">
          <NewsDetail selectedItem={this.state.selectedItem} />
        </div>
        <div className="col-md-3">
          <CreateNewsForm />
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  leftColumnStyle: { maxHeight: "99vh", overflowY: "scroll" }
};

export default NewsParentContainer;

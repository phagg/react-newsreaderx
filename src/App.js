import React, { Component } from "react";

import NewsContainer from "./sections/articles/containers/NewsContainer";
import NewsDetail from "./sections/newsviewer/components/NewsDetail";
import NewsParentContainer from "./shared/containers/NewsParentContainer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid pt-2">
        <div className="row">
          <NewsParentContainer />
          <div className="col-md-3">
            <div className="alert alert-warning">Skapa nytt</div>
          </div>
        </div>
      </div>
    );
  }
}

// styles

const styles = {
  leftColumnStyle: { maxHeight: "99vh", overflowY: "scroll" }
};

export default App;

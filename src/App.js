import React, { Component } from "react";

import NewsParentContainer from "./shared/containers/NewsParentContainer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid pt-2">
        <div className="row">
          <NewsParentContainer />
        </div>
      </div>
    );
  }
}

// Styles
const styles = {
  leftColumnStyle: { maxHeight: "99vh", overflowY: "scroll" }
};

export default App;

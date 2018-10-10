import React, { Component } from "react";

import Routes from "./routes";
import TopNavigation from "./shared/components/TopNavigation";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavigation />
        <div className="container-fluid pt-2">
          <Routes />
        </div>
      </React.Fragment>
    );
  }
}

// Styles
const styles = {
  leftColumnStyle: { maxHeight: "99vh", overflowY: "scroll" }
};

export default App;

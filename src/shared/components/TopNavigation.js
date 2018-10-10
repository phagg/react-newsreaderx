import React from "react";

import { Link } from "react-router-dom";

export default () => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      NewsReader X
    </a>
    <Link className="nav-link" to="/">
      Home
    </Link>
    |
    <Link className="nav-link" to="/aboutus">
      About Us
    </Link>
  </nav>
);

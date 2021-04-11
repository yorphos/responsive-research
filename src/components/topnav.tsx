import React, { Component } from "react";
import MiniLogin from "../components/mini-login";
import Hamburger from "./hamburger";
import { HamburgerGrouping } from "./hamburger";

import "./topnav.scss";

type TopNavProps = {
  hamburgerGrouping: HamburgerGrouping;
};

class TopNav extends Component<TopNavProps, {}> {
  render() {
    return (
      <nav className="top-nav">
        <Hamburger hamburgerGrouping={this.props.hamburgerGrouping} />
        <h1 className="top-nav-title">Test</h1>
        <MiniLogin />
      </nav>
    );
  }
}

export default TopNav;

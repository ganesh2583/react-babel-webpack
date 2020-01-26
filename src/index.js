// @flow

import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import Counter from "./components/Counter";
import "./index.scss";

const title = "React with Webpack and Babel";

type Props = {};

class RootApp extends React.Component<Props> {
  helloWorld = () => {
    //console.log("Hello");
  };

  render() {
    this.helloWorld();
    return (
      <div className="home-page-container">
        <div className="home-page-item">{title}</div>
        <div className="home-page-item">
          <Root />
          <Counter />
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");

if (app != null) {
  ReactDOM.render(<RootApp />, app);
}

export default RootApp;

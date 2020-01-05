import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import "./index.scss"

const title = "React with Webpack and Babel";

class RootApp extends React.Component {
  helloWorld = () => {
    console.log("Hello");
  };

  render() {
    this.helloWorld();
    return (
      <div className="home-page-container">
        <div className="home-page-item">{title}</div>
        <div className="home-page-item"><Root /></div>
      </div>
    );
  }
}

ReactDOM.render(<RootApp />, document.getElementById("app"));
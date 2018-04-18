import React from "react";

export default class Tweet extends React.Component {

  componentDidMount() {
    window.twttr.widgets.load();
  }

  render() {
    return (
      <blockquote className="twitter-tweet" data-align="center">
        {this.props.children}
      </blockquote>
    );
  }
}

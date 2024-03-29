import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("http://worldclockapi.com/api/jsonp/cet/now?callback=mycallback")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // automatically created the first time
  constructor(props) {
    super(props);
    this.state = { lat: null };

    // geolocation function
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => console.log(err)
    );
  }

  render() {
    // the return
    return (
      <div>
        <p>Your latitude is: {this.state.lat} </p>
        <p>Hi, winter is coming!</p>

        <SeasonDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

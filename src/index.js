import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // this is equivalent to constructor
  state = { lat: null, errorMessage: "" };
  //only when first loading
  componentDidMount() {
    // geolocation function
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  bodyContent(){
    if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      }
  
      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />;
      }
  
      return <Spinner message="Loading your location.." />;
    }
  

  render() {
    // the return
    return(
        <div>{this.bodyContent()}</div>
        
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

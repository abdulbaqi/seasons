This project follows along the Udemy tutorial by Stephen Grider.

Following are some personal notes I took along following the tutorial. Use whichever suits you.

After creating the scaffolding:

- We have loaded Semantic UI CSS

## Geolocation API

check `Geolocation API` from mozilla website.

```
window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => console.log(err)
    );
```

The App will display messages based on `latitude` value of the user (i.e., above or below the equator).

Note that in `inspector` of Chrome, you can activate a predefined `sensors` to select a location.

**States** are JS objects that contains data relevant to a component

When the state gets updated, the component gets re rendered. `setState` is the way to update state.

Don't place lots of time consuming and recurring functions (like the geolocation) inside the `render()` method.

the initialization of state must be kept as `null`

```
  this.state = { lat: null };
```

Shortcut in VS Code for applying Formatting is `shift+alt+F`

### handling error and conditions

```
render() {
    // the return
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lat: {this.state.lat}</div>;
    }

    return <div>Loading..</div>;
  }
```

another way is:

### component lifecycle

`constructor()` first time but data loading it is better to do it in `componentDidMount`.

in the `render()` is only for JSX returning

`componentDidMount()` only one time and for loading data

### no need for constructor in the following case

Babel can take the first line like

```
 class App extends React.Component{
      state = {lat:null}

}
```

and create the constructor for you, you do not need to write contructor and is same as

```
class App extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      lat: null
    });
  }
}

```

### passing state as prop : SeasonDisplay

we need to pass state in the main

```
 if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat = {this.state.lat} />
    }

```

and our new component is:

```
import React from "react";

const SeasonDisplay = (props) => {
  return <div>You are coming from {props.lat}</div>;
};

export default SeasonDisplay;
```

You can get the month name as follow:

```
new Date().getMonth()
```

We can use semantic ui for icons as follows

```
<i class="spinner loading icon" /><
```

### Refactoring with config object

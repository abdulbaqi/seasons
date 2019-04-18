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
another way


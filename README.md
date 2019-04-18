This project follows along the Udemy tutorial by Stephen Grider.

Following are some personal notes I took along following the tutorial. Use whichever suits you.

After creating the scaffolding:

* We have loaded Semantic UI CSS

## Geolocation API

check `Geolocation API` from mozilla website.

```
window.navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err) 
 );
```

The App will display messages based on `latitude` value of the user (i.e., above or below the equator).

Note that in `inspector` of Chrome, you can activate a predefined `sensors` to select a location.

**States** are JS objects that contains data relevant to a component
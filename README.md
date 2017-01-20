# Material UI Geosuggest

A basic material-ui textfield autosuggest for the Google Maps Places API.

## Requirements

You need to include `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places` script to your project at some point either by using:

1. `<script>` tag
2. External script loader like [react-load-script](https://github.com/blueberryapps/react-load-script/)

Ps: Google Map API key can be obtained by following the instructions on [Maps Javascript API](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Usage

```
  import React, { Component } from 'react';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import MuiGeoSuggest from 'material-ui-geosuggest';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <MuiThemeProvider>
            <MuiGeoSuggest />
          </MuiThemeProvider>
        </div>
      );
    }
  }

  export default App;

```
### Methods

#### onPlaceChange(object PlaceResult)

The method will trigger when user selects a place from the suggestion list. It will return the PlaceResult object which is specified at [Google-Map API References](https://developers.google.com/maps/documentation/javascript/3.exp/reference#PlaceResult).

### Styling

Styling of TextField can be done by just passing parameters according to [Material-UI / TextField](http://www.material-ui.com/#/components/text-field)


## License

MIT

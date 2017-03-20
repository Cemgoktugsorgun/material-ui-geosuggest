# Material UI Geosuggest

A basic material-ui textfield autosuggest for the Google Maps Places API.

## Installation

The package can be installed by using npm:

`npm install material-ui-geosuggest --save`

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
            <MuiGeoSuggest options={{
                types: ['(cities)'],
                componentRestrictions: {country: "us"}
              }}
            />
          </MuiThemeProvider>
        </div>
      );
    }
  }

  export default App;

```
### Properties

#### options(object AutocompleteOptions)

The property which will be passed to Autocomplete constructor as options. Detailed explanation of Autocomplete options
can be found at [Google-Map AutocompleteOptions](https://developers.google.com/maps/documentation/javascript/reference#AutocompleteOptions)

### Methods

#### onPlaceChange(object PlaceResult)

The method will trigger when user selects a place from the suggestion list. It will return the PlaceResult object which is specified at [Google-Map API References](https://developers.google.com/maps/documentation/javascript/3.exp/reference#PlaceResult).

### Styling

Styling of TextField can be done by just passing parameters according to [Material-UI / TextField](http://www.material-ui.com/#/components/text-field)


## License

MIT

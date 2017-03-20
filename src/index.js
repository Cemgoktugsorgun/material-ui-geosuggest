import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class MuiGeoSuggest extends Component {
    constructor(props) {
        super(props);

        this.onPlaceChange = props.onPlaceChange;
    }

    componentDidMount() {
        if (typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined') {

            const inputElement = document.getElementsByName(this.props.name)[0];

            this.apiObj = new window.google.maps.places.Autocomplete(inputElement, this.props.options);

            this.apiObj.addListener('place_changed', () => {
                this.onPlaceChange(this.apiObj.getPlace());
            });
        } else {
            console.error('Google API object is not defined');
        }
    }

    render() {
        const {
            options,
            onPlaceChange,
            ...props,
        } = this.props;

        if (onPlaceChange !== this.onPlaceChange) {
            this.onPlaceChange = onPlaceChange;
        }

        const finalProps = {
            ...props,
            placeholder: props.floatingLabelText || props.hintText ? '' : props.placeholder,
        };

        return (
          <TextField {...finalProps} />
        );
    }
};

MuiGeoSuggest.propTypes = {
    name: PropTypes.string,
    onPlaceChange: PropTypes.func,
    floatingLabelText: PropTypes.string,
    hintText: PropTypes.string,
    options: PropTypes.shape({}),
};

MuiGeoSuggest.defaultProps = {
    name: 'muiGeoSuggest',
    onPlaceChange: () => {},
    floatingLabelText: '',
    hintText: '',
    options: {},
};

export default MuiGeoSuggest;
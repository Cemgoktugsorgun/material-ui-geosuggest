import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class MuiGeoSuggest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typing: false,
        };

        this.handleTyping = this.handleTyping.bind(this);
    }

    handleTyping(event, newValue) {
        console.log(event);
        console.log(newValue);
    }

    render() {
        const { handleTyping } = this;

        return (
          <TextField
            onChange={handleTyping}
            {...this.props}
          />
        );
    }
};

MuiGeoSuggest.propTypes = {
    name: PropTypes.string,
};

MuiGeoSuggest.defaultProps = {
    name: 'muiGeoSuggest',
};

export default MuiGeoSuggest;
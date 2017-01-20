import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import TextField from 'material-ui/TextField';
import MuiGeoSuggest from '../index';

describe('Shallow rendering', () => {
    it('should render a textfield', () => {
        const wrapper = shallow(<MuiGeoSuggest />);
        expect(wrapper.find(<TextField />));
    });
});

describe('Static rendering', () => {

});

describe('Full rendering', () => {
    
});

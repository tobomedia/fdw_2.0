import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import React from 'react';
import { mount, render, shallow } from 'enzyme';

global.expect = expect;
global.sinon = sinon;
global.spy = spy;
global.React = React;

global.mount = mount;
global.render = render;
global.shallow = shallow;

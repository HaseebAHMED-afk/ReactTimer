import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import MainHeading from './Components/MainHeading';

describe('App component renders', () => {
  let container:any;

  beforeEach(() => (container = shallow(<App />)))

  it('should render a div' , () =>{
    expect(container.find('div').length).toEqual(1)
  } )

  it('should render heading' , () => {
    expect(container.containsMatchingElement(<MainHeading />)).toEqual(true)
  })
})
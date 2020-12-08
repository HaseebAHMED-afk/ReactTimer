import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import MainHeading from './Components/MainHeading';
import Main from './Components/Main/Main'

describe('App component renders', () => {
  let container:any;

  beforeEach(() => (container = shallow(<App />)))

  it('should render App components', ()=>{
    expect(container).toMatchSnapshot();
  })

  it('should render a div' , () =>{
    expect(container.find('div').length).toEqual(1)
  } )

  it('should render heading' , () => {
    expect(container.containsMatchingElement(<MainHeading />)).toEqual(true)
  })

  it('should render main component', () => {
    expect(container.containsMatchingElement(<Main />)).toEqual(true)
  })
})
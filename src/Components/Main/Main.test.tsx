import React from 'react';
import {shallow} from 'enzyme';
import Main from './Main';

describe('Main Components Test Case', () => {
    let container : any;

    beforeEach(() => (container = shallow(<Main />)))
    it('renders the main component', ()=> {
        expect(container).toMatchSnapshot()
    })

    it('renders the headings',() => {
        expect(container.find('h1').length).toEqual(1)
    })

    it('renders the divs', () => {
        expect(container.find('div').length).toEqual(2)
    })

    it('renders control components', ()=>{
        expect(container.find('Controls').length).toEqual(1)
    })
})

import { shallow } from 'enzyme';
import React from 'react';
import Controls from './Control';
import setTimeInSeconds from '../Main/Main'

describe('Controls Test Cases', () => {
    let container:any;

    beforeEach(()=> (container = shallow(<Controls time={setTimeInSeconds} />)))

    it('renders controls component', () => {
        expect(container).toMatchSnapshot()
    })

    it('renders all the buttons', () => {
        expect(container.find('button').length).toEqual(3)
    })
})

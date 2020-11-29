import { shallow } from 'enzyme';
import MainHeading from './MainHeading';

describe('renders heading component' , () =>{
    it('renders main heading' , () => {
        let container = shallow(<MainHeading />)
        expect(container.find('div').length).toEqual(1)
    })
})

import React from 'react';
import {shallow} from 'enzyme';
import {CurrentTemp} from '../components/CurrentTemp';

/*describe("LocationInput Component" , () => {
    let wrapper;
    // our mock login function to replace the one provided by mapDispatchToProps
    const mockLoginfn = jest.fn();
   
     beforeEach(() => {
       // pass the mock function as the login prop 
       wrapper = shallow(<LocationInput/>)
     })
     // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<LocationInput />).find('input').exists()).toBe(true)
    })
})*/

/*describe('location input', () => {
  
    it('should respond to change event and change the state of the Login Component', () => {
     
     const wrapper = shallow(<Login />);
     wrapper.find('#email').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
     
    expect(wrapper.state('email')).toEqual('blah@gmail.com');
    })
})*/

/*city: state.city,
		icon: state.icon,
		temp: state.temp,
		forecast: state.forecast,
		humidity: state.humidity,
        wind: state.wind*/
        

      /*  const wrapper = mount(<MyComponent foo={10} />);
expect(wrapper.props().foo).to.equal(10);*/


describe('CurrentTemp component', () => {
  
    it('should render', () => {   
    
        const wrapper = shallow(<CurrentTemp />);
    
    expect(wrapper.exists()).toBe(true);
    })

})

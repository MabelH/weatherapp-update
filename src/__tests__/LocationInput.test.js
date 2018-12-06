import React from 'react';
import {shallow} from 'enzyme';
import {LocationInput, Button} from '../components/LocationInput';


describe('LocationInput component', () => {
  
    it('should update value based on changes', () => {   
    
        const wrapper = shallow(<LocationInput getGeoLocation={() => {}} />);
        wrapper.find('input').simulate("change", {
            target: {value: "02905"}
        })
    
        expect(wrapper.find('input').props().value).toEqual("02905")
    })

    xit('should update GeoLocation on submit', () => {   
        
        //const event = {preventDefault:() =>{}}
        const wrapper = shallow(<LocationInput getGeoLocation={() => {}} />);
        wrapper.find(Button).first().simulate('click',event)
    
        expect('getGeoLocation' in wrapper.props()).toEqual("02905")
    })

    describe('handleClick()', () => {
        it('should exist', () => {
            expect(LocationInput.prototype.handleClick).toBeDefined()
        })

        it('should call getGeoLocation', ()=> {
            const props = {getGeoLocation:()=> {}}
            const spyOnGetGeoLocation = jest.spyOn(props, "getGeoLocation")
            
            const e = {preventDefault:() => {}}

            const locationInput = new LocationInput(props)
            
            const spyOnResetInput = jest.spyOn(locationInput, 'resetInput').mockImplementation(() => {})

            locationInput.handleClick(e)

            expect(spyOnGetGeoLocation).toBeCalled()
            expect(spyOnResetInput).toBeCalled()

        })
    })

})

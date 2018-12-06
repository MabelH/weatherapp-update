import React from 'react';
import {shallow} from 'enzyme';
import {DayList, ListContainer } from './DayList';
import Day from "./Day"

describe('DayList Component', () => {
    it('Should exist', () => {
        expect(DayList).toBeDefined()
    })

    it('Should render ListContainer', () => {
        const wrapper = shallow(<DayList />)

        expect(wrapper.find(ListContainer).length).toBe(1)

    })

    it('should render the right number of days', () => {
        const props = {
            date: [
                {
                    weather:[
                        {}
                    ],
                  
                }
            ]
        }
        const wrapper = shallow(<DayList {...props} />)
        expect(wrapper.find(Day).length).toBe(1)


    })
})
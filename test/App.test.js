import App from '../src/components/App'
import {shallow} from 'enzyme'
import React from 'react'

describe("App", () => {
    it("", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('h1').text()).toBe('Hello from React starter')
        expect(wrapper).toMatchSnapshot
    })
})
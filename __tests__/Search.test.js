import React from 'react';
import renderer, { create } from 'react-test-renderer';
import { render, fireEvent ,screen } from '@testing-library/react-native';
import Search from "../src/Components/Search";
import '@testing-library/jest-dom'

// const childrenComponent = jest.fun()
// jest.mock('../src/Components/Search' , () => (props) => {
//     childrenComponent(props)
//     return <mock-childrenComponent/>
// })

describe("Test Search Component" , () => {
    
    it("The Component Render Successfully" , () => {
        const tree = renderer.create(<Search/>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it(`Make Sure The Component Accept Props And Display It,
        Text Input Will Accept The Value Text
        And The Function From Higher Component` , () => {
            //Mock The OnChangeText Function
        const mockFunction = jest.fn()

        render(<Search text={'He'} fun={mockFunction}/>)

        //Get The TextInput Component Inside The Search Component
        const textInput = screen.getByPlaceholderText('Enter The Restaurant Name')
                            //Element    Data
        fireEvent.changeText(textInput , 'He')
        expect(textInput.props.value).toBe("He")
        expect(mockFunction).toBeCalled()
    })
})

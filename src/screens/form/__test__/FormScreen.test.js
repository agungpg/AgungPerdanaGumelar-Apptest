import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {FormScreenComp} from '../FormScreen';
import { mockFormProps } from '../FormScreen.constant';
import { mockData } from '../../detail/DetailScreen.constant';

describe('Detail Screen', () => {
    it("Did mount", () => {
        mockFormProps["data"] = mockData;
        mockFormProps["route"]["params"]["formType"] = "update"
        
        const screen = render(<FormScreenComp {...mockFormProps} />);
        
        expect(screen.getByTestId("inputFirstName").props.value).toEqual("Agung");
        expect(screen.getByTestId("inputLastName").props.value).toEqual("Perdana");
        expect(screen.getByTestId("inputAge").props.value).toEqual("26");
        expect(screen.getByTestId("inputPhoto").props.value).toEqual("https://placeimg.com/640/480/people");
        
    })


    it("On create contact", () => {
        mockFormProps["route"]["params"]["formType"] = "create";
        spyOn(mockFormProps, "dipatchCreateContact")
        
        
        const screen = render(<FormScreenComp {...mockFormProps} />);
        const submitButton = screen.getByTestId("submitButton");
        const inputPhoto = screen.getByTestId("inputPhoto");
        const inputFirstName = screen.getByTestId("inputFirstName");
        const inputLastName = screen.getByTestId("inputLastName");
        const inputAge = screen.getByTestId("inputAge");

        fireEvent.changeText(inputPhoto, mockData.photo);
        fireEvent.changeText(inputFirstName, "dzawin");
        fireEvent.changeText(inputLastName, "nur");
        fireEvent.changeText(inputAge, "33");
        fireEvent.press(submitButton);

        expect(mockFormProps.dipatchCreateContact).toHaveBeenCalledWith({
            firstName: "dzawin",
            lastName: "nur",
            photo: mockData.photo,
            age: "33"
        });
        
    })

    it("On update contact", () => {
        mockFormProps["data"] = mockData;
        mockFormProps["route"]["params"]["formType"] = "update";
        spyOn(mockFormProps, "dipatchUpdateContact")
        
        
        const screen = render(<FormScreenComp {...mockFormProps} />);
        const submitButton = screen.getByTestId("submitButton");
        const inputLastName = screen.getByTestId("inputLastName");

        fireEvent.changeText(inputLastName, "edited");
        fireEvent.press(submitButton);

        expect(mockFormProps.dipatchUpdateContact).toHaveBeenCalledWith({
            ...mockData,
            lastName: "edited"
        });
    })

})
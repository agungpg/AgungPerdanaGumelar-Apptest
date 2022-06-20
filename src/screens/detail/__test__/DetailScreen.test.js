import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {DetailScreenComp} from '../DetailScreen';
import { mockData, mockProps, mockCustomButtonProps } from '../DetailScreen.constant';
import { CustomButton } from '../components';

describe('Detail Screen', () => {
    it("Did mount", () => {
        mockProps["data"] = mockData;
        spyOn(mockProps, "retrieveDetailContact")
        const screen = render(<DetailScreenComp {...mockProps} />);

        expect(mockProps.retrieveDetailContact).toHaveBeenCalledWith("123");
        expect(screen.queryAllByTestId("avatar").length).toEqual(1);
        expect(screen.queryAllByTestId("contactInfo").length).toEqual(1);
    })

    it('On press button update', () => {
        spyOn(mockProps.navigation, "navigate")
        const screen = render(<DetailScreenComp {...mockProps} />);
        const addContactButton = screen.getByTestId("updateContactButton");
        fireEvent.press(addContactButton);
        expect(mockProps.navigation.navigate).toHaveBeenCalledWith("FORM", {formType: "update"});
    })

    it('On press button delete', () => {
        spyOn(mockCustomButtonProps, "onPress")
        const screen = render(<CustomButton {...mockCustomButtonProps} />);
        const addContactButton = screen.getByTestId("deleteContactButton");
        fireEvent.press(addContactButton);
        expect(mockCustomButtonProps.onPress).toHaveBeenCalled();
    })
})
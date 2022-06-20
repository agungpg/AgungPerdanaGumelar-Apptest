import React from 'react';
import { render, fireEvent, } from '@testing-library/react-native';
import {HomeScreenComp} from '../HomeScreen';
import {HomeHeader} from '../components';
import { mockProps, mockData } from '../HomeScreen.contants';

describe('Home Screen', () => {
    it("Did mount with no data", () => {
        const screen = render(<HomeScreenComp {...mockProps} />);

        expect(screen.queryAllByTestId("contactCard").length).toEqual(0);
    })
    it('Did mount with data', () => {
        mockProps["data"] = mockData;
        
        const screen = render(<HomeScreenComp {...mockProps} />);

        expect(screen.queryAllByTestId("contactCard").length).toEqual(1);
    })

    it('Search contact by name', () => {
        const mockChangeKeyword = jest.fn()
        const headerComp = render(<HomeHeader onSearchTextChange={mockChangeKeyword} searchKeyword={""} />);
        const searchTextInput = headerComp.getByTestId("searchTextInput");

        fireEvent.changeText(searchTextInput, 'agung');

        expect(mockChangeKeyword).toHaveBeenCalledWith('agung');
    })

    it('Go to form screen ', () => {
        spyOn(mockProps.navigation, "navigate")
        const screen = render(<HomeScreenComp {...mockProps} />);
        const addContactButton = screen.getByTestId("addContactButton");

        fireEvent.press(addContactButton);

        expect(mockProps.navigation.navigate).toHaveBeenCalledWith("FORM", {formType: "create"});
    })
})
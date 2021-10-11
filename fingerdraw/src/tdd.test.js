import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import useExampleCustomReactHook from './useExampleCustomReactHook.js';
import { renderHook } from '@testing-library/react-hooks';

import App from "./App";
// import saveOrClearHook from './hooks/SaveOrClearHook.js';
import saveOrClearHook from './hooks/SaveOrClearHook.js';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
describe('useExampleCustomReactHook', () => {
    it("render the App", () => {
        act(() => { render(<App />, container); });
        const isOk = container.textContent.includes("Save to server");
        expect(isOk).toBe(true);
    });


    it("agogo", () => {

        const { result } = renderHook(useExampleCustomReactHook);



        expect(true).toBe(true)
    });

});
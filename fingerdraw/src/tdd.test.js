import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
// 

import useExampleCustomReactHook from './useExampleCustomReactHook.js';
import { renderHook, act } from '@testing-library/react-hooks';
import App from "./App";
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
    // it("render the App", () => {
    //     act(() => { render(<App />, container); });
    //     const isOk = container.textContent.includes("Save to server");
    //     expect(isOk).toBe(true);
    // });


    it('Should provide a default message', () => {
        const defaultMessage = "default example message";
        const { result } = renderHook(useExampleCustomReactHook);
        expect(result.current.message).toEqual(defaultMessage);
    });

    it('Should update the message', () => {
        const updatedMessage = 'hello world!';
        const { result } = renderHook(useExampleCustomReactHook);
        const defaultMessage = "default example message";
        expect(result.current.message).toEqual(defaultMessage);

        act(() => {
            result.current.setMessage(updatedMessage);
        });

        expect(result.current.message).toEqual(updatedMessage);
    });


    it('Should update the message', () => {
        const defaultMessage = "default example message";

        const updatedMessage = 'hello world!';
        const { result } = renderHook(useExampleCustomReactHook);
        expect(result.current.message).toEqual(defaultMessage);

        act(() => {
            result.current.setMessage(updatedMessage);
        });

        expect(result.current.message).toEqual(updatedMessage);
    });



    it('Should update the message via my thing', () => {
        const defaultMessage = "default example message";

        const updatedMessage = 'kittycat';
        const { result } = renderHook(useExampleCustomReactHook);
        expect(result.current.message).toEqual(defaultMessage);

        act(() => {
            result.current.setMyMessage(updatedMessage);
        });

        expect(result.current.message).toEqual("kittycat");
    });


    // it('SECOND', () => {
    //     // const { result } = renderHook(saveOrClearHook);

    //     const [choice, handleChoice] = renderHook(saveOrClearHook());


    //     // console.log(result)
    //     expect(true).toEqual(true);
    // });



    // it("agogo", () => {
    //     const { result } = renderHook(useExampleCustomReactHook);

    //     message,
    //     setMessage

    //     expect(true).toBe(true)
    // });



});
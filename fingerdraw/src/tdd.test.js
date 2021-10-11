import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
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
describe('Test the hooks', () => {


    it('set to save', () => {
        const { result } = renderHook(saveOrClearHook);
        expect(result.current.choice).toEqual(undefined);
        act(() => {
            result.current.handleChoiceFunction("save");
        });
        expect(result.current.choice).toEqual("save");
        expect(result.current.hideOrShowCss['display']).toEqual("block");
    });

    it('set to clear', () => {
        const { result } = renderHook(saveOrClearHook);
        expect(result.current.choice).toEqual(undefined);
        act(() => {
            result.current.handleChoiceFunction("save");
            result.current.handleChoiceFunction("save");
            result.current.handleChoiceFunction("save");
            result.current.handleChoiceFunction("save");
            result.current.handleChoiceFunction("clear");
        });
        expect(result.current.choice).toEqual("clear");
        expect(result.current.hideOrShowCss['display']).toEqual("none");
    });
});
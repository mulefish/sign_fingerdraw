import { renderHook, act } from "@testing-library/react-hooks";
import useSaveOrClearHook from "./hooks/useSaveOrClearHook.js";

describe("Test the hooks", () => {
  it("set to save", () => {
    const { result } = renderHook(useSaveOrClearHook);
    expect(result.current.choice).toEqual(undefined);
    act(() => {
      result.current.handleChoiceFunction("save");
    });
    expect(result.current.choice).toEqual("save");
    expect(result.current.hideOrShowCss["display"]).toEqual("block");
  });

  it("set to clear", () => {
    const { result } = renderHook(useSaveOrClearHook);
    expect(result.current.choice).toEqual(undefined);
    act(() => {
      result.current.handleChoiceFunction("clear");
    });
    expect(result.current.choice).toEqual("clear");
    expect(result.current.hideOrShowCss["display"]).toEqual("none");
  });
});

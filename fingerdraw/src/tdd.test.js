import { renderHook, act } from "@testing-library/react-hooks";
import useSaveOrClearHook from "./hooks/useSaveOrClearHook.js";
import useDataUrlToBlob from "./hooks/useDataUrlToBlob.js";

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

  //   it("given dataURL get image back", () => {
  //     const { result } = renderHook(useDataUrlToBlob);
  //     const dataUrl =
  //       "data:image/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAAwEAAADNCAYAAADg3XxHAAAAAXNSR0IArs4c6QAADGpJREFUeF7t16EBACAQAzEYjclZDYNAsMEFiWu+pnN4BAgQIECAAAECBAikBGYqrbAECBAgQIAAAQIECAwjQAkIECBAgAABAgQIxASMgNjBxSVAgAABAgQIECBgBOgAAQIECBAgQIAAgZiAERA7uLgECBAgQIAAAQIEjAAdIECAAAECBAgQIBATMAJiBxeXAAECBAgQIECAgBGgAwQIECBAgAABAgRiAkZA7ODiEiBAgAABAgQIEDACdIAAAQIECBAgQIBATMAIiB1cXAIECBAgQIAAAQJGgA4QIECAAAECBAgQiAkYAbGDi0uAAAECBAgQIEDACNABAgQIECBAgAABAjEBIyB2cHEJECBAgAABAgQIGAE6QIAAAQIECBAgQCAmYATEDi4uAQIECBAgQIAAASNABwgQIECAAAECBAjEBIyA2MHFJUCAAAECBAgQIGAE6AABAgQIECBAgACBmIAREDu4uAQIECBAgAABAgSMAB0gQIAAAQIECBAgEBMwAmIHF5cAAQIECBAgQICAEaADBAgQIECAAAECBGICRkDs4OISIECAAAECBAgQMAJ0gAABAgQIECBAgEBMwAiIHVxcAgQIECBAg=";
  //     act(() => {
  //       result.current.convertToBlob(dataUrl);
  //     });
  //     expect(true).toEqual(true);
  //   });
});

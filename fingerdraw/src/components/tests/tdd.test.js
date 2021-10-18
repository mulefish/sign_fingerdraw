import { renderHook, act } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";
import useSaveOrClearHook from "../signature/hooks/useSaveOrClearHook.js";
import useDataUrlToBlob from "../signature/hooks/useDataUrlToBlob.js";
import types from "../signature/redux/types.js";
import thunks from "../signature/redux/thunks.js";
import actions from "../signature/redux/actions.js";
import reducer from "../signature/redux/reducers.js";
import MyButton from "../something/MyButton.js";
import { Provider as ReduxProvider } from "react-redux";
import { rootReducer } from "../../redux/reduxStore.js";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

// describe("Test Redux stuff", () => {
//   it("Trace's class", () => {
//     render(<MyButton></MyButton>, {
//       wrapper: ({ children }) => {
//         const store = createStore(
//           rootReducer,
//           {
//             testInfo: "one",
//             testStatus: "two",
//           },
//           composeWithDevTools(applyMiddleware(thunk))
//         );
//         return <ReduxProvider store={rootReducer}>{children}</ReduxProvider>;
//       },
//     });
//     // console.log(JSON.stringify(rootReducer, null, 2));
//   });
// });

describe("Test the component/signature hooks", () => {
  it("set to save", () => {
    const { result } = renderHook(useSaveOrClearHook);
    // expect(result.current.choice).toEqual(undefined);
    act(() => {
      result.current.handleChoiceFunction("save");
    });
    expect(result.current.choice).toEqual("save");
    expect(result.current.hideOrShowCss["display"]).toEqual("block");
  });

  it("set to clear", () => {
    const { result } = renderHook(useSaveOrClearHook);
    // expect(result.current.choice).toEqual(undefined);
    act(() => {
      result.current.handleChoiceFunction("save");
      result.current.handleChoiceFunction("clear");
    });
    expect(result.current.choice).toEqual("clear");
    expect(result.current.hideOrShowCss["display"]).toEqual("none");
  });

  it("given dataURL get image back", () => {
    const { result } = renderHook(useDataUrlToBlob);
    const dataUrl =
      "data:image/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAA8AAAACiCAYAAACOAqRXAAACd0lEQVR4nO3DAQ0AAAgDoPcvrQkewAkbCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDSlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAcwuvxQX7xumjvgAAAABJRU5ErkJggg==";
    act(() => {
      result.current.convertToBlobFunction(dataUrl);
    });
    const bytes = 688;
    const type = "image/png";
    const x = result.current.blob;
    const isOk = bytes === x.size && x.type === type;
    expect(true).toEqual(isOk);
  });
});

describe("Test the component/sgnature redux stuff", () => {
  it("types.js is ok", () => {
    let expected = ["setTestInfo", "setTestStatus"]; // The types.js object should have these keys and values
    let isOk = true;
    expected.forEach((item) => {
      if (!types[item]) {
        isOk = false;
      } else if (types[item] !== item) {
        isOk = false;
      }
    });
    expect(isOk).toEqual(true);
  });

  it("types.js type direct check", () => {
    expect(types.setTestInfo).toEqual("setTestInfo");
    expect(types.setTestStatus).toEqual("setTestStatus");
  });

  it("thunks is setup ok and compiles and contains the proper 'getTest()' function", () => {
    const expected = "function";
    const actual = typeof thunks.getTest;
    expect(expected).toEqual(actual);
  });

  it("actions is setup ok and compiles and contains the proper 'setTestInfo()' and 'setTestStatus()' functions", () => {
    const expected1 = "function";
    const expected2 = "function";
    const actual1 = typeof actions.setTestInfo;
    const actual2 = typeof actions.setTestStatus;
    const isOk = actual1 === expected1 && actual2 === expected2;
    expect(isOk).toEqual(true);
  });

  it("reducer is setup ok ( direct test )", () => {
    const expected1 = "Dirty dirty kitten";
    const expected2 = "wet wet sky";
    const fakeAction1 = {
      type: types.setTestInfo,
      testInfo: expected1,
    };
    const actual1 = reducer({}, fakeAction1);
    const fakeAction2 = {
      type: types.setTestStatus,
      testStatus: expected2,
    };
    const actual2 = reducer({}, fakeAction2);
    const isOk =
      actual1.testInfo === expected1 && actual2.testStatus === expected2;

    expect(isOk).toEqual(true);
  });
});

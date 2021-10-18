import { renderHook, act } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";
import useSaveOrClearHook from "../signature/hooks/useSaveOrClearHook.js";
import useDataUrlToBlob from "../signature/hooks/useDataUrlToBlob.js";
import types from "../signature/redux/types.js";
import thunks from "../signature/redux/thunks.js";
import actions from "../signature/redux/actions.js";
import reducer from "../signature/redux/reducers.js";
//import My Button from "../reduxTestButton/My Button.js";
import { Provider as ReduxProvider } from "react-redux";
import { rootReducer } from "../../redux/reduxStore.js";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { NILL } from "../../helpers.js";

// describe("Test redux stuff"),
//   () => {
//     it("Find the redux default values", () => {
//       const dispatch = useDispatch();
//       const testInfo = useSelector((state) => state.signatureReducer.testInfo);
//       const testStatus = useSelector(
//         (state) => state.signatureReducer.testStatus
//       );
//       expect(isOk).toEqual(true);
//     });
//   };

// describe("Test Redux stuff", () => {
//   it("work you!", () => {
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
  it("Find the rootReducer", () => {
    console.log(rootReducer);
    const isOk = true;
    expect(isOk).toEqual(true);
  });
});

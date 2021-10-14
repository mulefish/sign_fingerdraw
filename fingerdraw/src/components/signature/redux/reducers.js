import types from "./types";
const initalState = {
    testInfo: "NILL",
    testStatus: "NILL",
}
export default function (state = initalState, action) {
    switch (action.type) {
        case types.setTestInfo:
            return {
                ...state,
                testInfo: action.testInfo
            }
        case types.setTestStatus:
            return {
                ...state,
                testStatus: action.testStatus
            }
        default:
            return state;
    }
}
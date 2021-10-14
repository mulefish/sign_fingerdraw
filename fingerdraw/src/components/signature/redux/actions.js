import types from "./types";

const setTestInfo = (info) => {
    const obj = {
        type: types.setTestInfo,
        testInfo: testInfo
    }
}
const setTestStatus = (testStatus) => {
    const obj = {
        type: types.setTestStatus,
        testStatus: testStatus
    }
}
export default {
    setTestInfo,
    setTestStatus
}
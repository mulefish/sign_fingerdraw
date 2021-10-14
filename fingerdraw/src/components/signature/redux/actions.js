import types from "./types";

const setTestInfo = (testInfo) => {
  const obj = {
    type: types.setTestInfo,
    testInfo: testInfo,
  };
  return obj;
};
const setTestStatus = (testStatus) => {
  const obj = {
    type: types.setTestStatus,
    testStatus: testStatus,
  };
  return obj;
};
export default {
  setTestInfo,
  setTestStatus,
};

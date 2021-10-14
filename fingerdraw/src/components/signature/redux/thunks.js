import { NILL } from '../../../helpers.js';
import actions from './actions.js';
const getTest = (testString) => async (dispatch) => {
    {
        dispatch(actions.setTestStatus("testing"));
        dispatch(actions.setTestInfo(testString));
    }
};
export default {
    getTest
};
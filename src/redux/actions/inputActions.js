import actionTypes from '../actionTypes';

export default {
    setInputName: name => ({
        type: actionTypes.SET_INPUT_NAME,
        name,
    }),
    setInputAge: age => ({
        type: actionTypes.SET_INPUT_AGE,
        age,
    }),
    setInputAddress: address => ({
        type: actionTypes.SET_INPUT_ADDRESS,
        address,
    }),
    setInputTags: tags => ({
        type: actionTypes.SET_INPUT_TAGS,
        tags,
    }),
}
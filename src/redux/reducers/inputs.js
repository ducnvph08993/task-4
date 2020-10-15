import actionTypes from '../actionTypes';

const initialState = {
    name: '',
    age: '',
    address: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT_NAME: {
            const { name } = action;
            return {
                ...state,
                name,
            }
        }
        case actionTypes.SET_INPUT_AGE: {
            const { age } = action;
            return {
                ...state,
                age,
            }
        }
        case actionTypes.SET_INPUT_ADDRESS: {
            const { address } = action;
            return {
                ...state,
                address,
            }
        }
        case actionTypes.RESET_INPUT: {
            return initialState;
        }
        default:
            return state;
    }
}
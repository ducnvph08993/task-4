import actionTypes from '../actionTypes';

export default {
    addEmployee: (employee) => ({
        type: actionTypes.ADD_EMPLOYEE,
        employee,
    }),
    updateEmployee: (index, employee) => ({
        type: actionTypes.UPDATE_EMPLOYEE,
        employee,
        index,
    }),
    deleteEmployee: (index) => ({
        type: actionTypes.DELETE_EMPLOYEE,
        index,
    })
}
import actionTypes from '../actionTypes';

const initialState = {
    employees: [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_EMPLOYEE: {
            const employees = [...state.employees];
            employees.push(state.employee);
            return {
                employees,
            }
        };
        case actionTypes.UPDATE_EMPLOYEE: {
            const { index, employee } = action;
            const employees = [...state.employees];
            employees[index] = employee;
            return {
                employees,
            }
        };
        case actionTypes.DELETE_EMPLOYEE: {
            const { index } = action;
            const employees = state.employees
            delete employees[index];
            return {
                employees,
            }
        }
        default:
            return state;
    }
}
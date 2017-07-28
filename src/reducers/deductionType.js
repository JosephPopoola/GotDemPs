const initialState = {
    name: null,
    percentage: 0.0
}

const deductionType = (state = initialState, action) => {
    switch(action.type){
        case 'SET_DEDUCTION_NAME':
            return Object.assign({}, state, {
                name: action.name
            });
        case 'SET_DEDUCTION_PERCENTAGE':
            return Object.assign({}, state, {
                percentage: action.percentage
            });
        default: 
            return state
    }
};

export default deductionType;
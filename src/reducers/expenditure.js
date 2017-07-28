const initialState = {
    name: null,
    value: 0,
}

const expenditure = (state = initialState, action) => {
    switch(action.type){
        case 'SET_EXPENDITURE_NAME':
            return Object.assign({}, state, {
                name: action.name
            });
        case 'SET_EXPENDITURE_VALUE':
            return Object.assign({}, state, {
                value: action.value
            });
        default: 
            return state
    }
};

export default expenditure;
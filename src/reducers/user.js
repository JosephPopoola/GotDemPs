const initialState = {
    name: null,
    deductionTypes: [],
    mansPs: []
}

const user = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER_NAME':
            return Object.assign({}, state, {
                name: action.name
            });
        case 'SET_DEDUCTION_TYPE':
            return Object.assign({}, state, {
                deductionTypes: action.deductionTypes
            });
        case 'SET_MANS_PS':
            return Object.assign({}, state, {
                mansPs: action.mansPs
            });
        default: 
            return state
    }
};

export default user;
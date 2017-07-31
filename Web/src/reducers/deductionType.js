import newEntryExistsInArray from './helpers/newEntryExistsInArray'

const initialState = {
    name: null,
    percentage: 0.0
}

const deductionType = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_DEDUCTION_TYPE':
            return {
                name: action.name,
                percentage: action.percentage
            }
        default: 
            return state
    }
};

const deductionTypes = (state = [], action) => {
    switch(action.type){
        case 'ADD_DEDUCTION_TYPE': 
            if (newEntryExistsInArray(state, action)) {
                return state;
            }else{
                return [
                ...state,
                deductionType(undefined, action)
                ]
            }
        default: 
            return state
    }
};

export default deductionTypes;
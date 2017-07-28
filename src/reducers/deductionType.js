const initialState = {
    name: null,
    percentage: 0.0
}

const deductionType = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_DEDUCTION': 
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
        case 'ADD_DEDUCTION': 
            if (state.map(m => m.id).includes(action.id)) {
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

export default deductionType;
import addToArrayIfNew from './helpers/addToArrayIfNew'

const initialState = {
    name: '',
    deductionTypes: [
        {name: ''}
    ],
    mansPs: [
        {name: ''}
    ]
}

const user = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER_NAME':
            return Object.assign({}, state, {
                name: action.name
            });
        case 'ADD_DEDUCTION_TYPE':
            return addToArrayIfNew(state, state.deductionTypes, action.deductionType)           
        case 'ADD_MANS_PS':
            let index = state.mansPs.findIndex((x) => x.name === action.mansP.name); 
            if(index > -1){
                return state
            }
            else{
                return {
                    ...state,
                    arr: [...state.mansPs, action.mansP]
                }
            }
        default: 
            return state
    }
};

export default user;
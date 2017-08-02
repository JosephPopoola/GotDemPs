import newEntryExistsInArray from './helpers/newEntryExistsInArray'
import mansPBuilder from './builders/mansPBuilder'

const initialState = {
        name: '',
        mansPs: [{
            name: '',
            annualAmount: 0,
            monthlyAmount: 0,
            expenditures: [{
                name: '',
                value: 0
            }],
            disposableIncome: 0
        }],
}

const user = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case 'SET_USER_NAME':
        console.log(state)
            return Object.assign({}, state, {
                name: action.name
            });
        case 'ADD_MANS_PS_TO_USER':
        console.log(state)
            if(newEntryExistsInArray(state.mansPs, action.manP)){
                return state
            }
            else{
                if(state.mansPs.map(m => m.name).includes('')){
                    state.mansPs.splice(0,1);
                }
                return{
                    ...state,
                    mansPs: [...state.mansPs, mansPBuilder(undefined, action)]
                }
            }
        default: 
            return state
    }
};

export default user;
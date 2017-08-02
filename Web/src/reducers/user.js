import newEntryExistsInArray from './helpers/newEntryExistsInArray'
import mansPBuilder from './builders/mansPBuilder'

const mansPstate = {
    name: '',
    annualAmount: 0,
    monthlyAmount: 0,
    expenditures: [{
        name: '',
        value: 0
    }],
    disposableIncome: 0
}

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
    switch(action.type){
        case 'SET_USER_NAME':
            return Object.assign({}, state, {
                name: action.name
            });      
        case 'ADD_MANS_PS_TO_USER':
            if(newEntryExistsInArray(state.mansPs, action.manP)){
                return state
            }
            else{
                if(state.mansPs.map(m => m.name).includes('')){
                    state.mansPs.splice(0,1); //bad practice, mutatiing the state
                }
                return{
                    ...state,
                    mansPs: [...state.mansPs, mansPBuilder(undefined, action)]
                }
            }
        case 'ADD_MANS_P':
            console.log('action tryna add man p')
            console.log(action.type)
            return{
                ...state,
                mansPs: [...state.mansPs, mansPstate]
            }              
        default: 
            return state
    }
};

export default user;
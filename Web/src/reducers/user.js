import newEntryExistsInArray from './helpers/newEntryExistsInArray'
import mansPBuilder from './builders/mansPBuilder'
import update from 'immutability-helper'

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

const expenditureInitState = {
    name: '',
    value:0
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
            console.log(action.type)
            return Object.assign({}, state, {
                name: action.name
            });      
        case 'ADD_MANS_PS_TO_USER': //needs to become an update
            if(newEntryExistsInArray(state.mansPs, action.manP)){
                return state
            }
            else{
                if(state.mansPs.map(m => m.name).includes('')){
                    update(state, {
                        mansPs: {$splice: state.mansPs[0]}
                    }) 
                }
                return{
                    ...state,
                    mansPs: [...state.mansPs, mansPBuilder(undefined, action)]
                }
            }              
        case 'ADD_MANS_P':
            return update(state, {
                mansPs: {$push: [mansPstate]}
            })           
        case 'ADD_EXPENDITURE':
            return update(state, {
                mansPs: 
                {expenditure :
                    {$push: [expenditureInitState]}
                }
            })           
        default: 
            return state
    }
};

export default user;
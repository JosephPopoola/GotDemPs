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
        case 'ADD_MANS_P':
            return update(state, {
                mansPs: {$push: [mansPstate]}
            })           
        case 'ADD_EXPENDITURE':
            let mansPsIndex = state.mansPs.findIndex(x=>x.name === action.mansP.name);
            if(mansPsIndex > -1){
                return update(state, {
                        mansPs: {
                            [mansPsIndex] : {
                                expenditures: {$push: [expenditureInitState]}
                            }
                        }
                    })
            }              
            return state
        case 'SAVE_MANS_P':
            return Object.assign({}, state, {
                mansPs: action.user.mansPs
            });         
        default: 
            return state
    }
};

export default user;
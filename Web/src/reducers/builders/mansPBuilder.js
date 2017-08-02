import expenditureBuilder from './expenditureBuilder'

let initialState = {
    name: null,
    annualAmount: 0,
    monthlyAmount: 0,
    expenditures: [],
    disposableIncome: 0
};

const mansPBuilder = (state = initialState, action) => {
    console.log(state)
    switch(action.type){
        case 'ADD_MANS_PS_TO_USER': 
            return {
                name: action.manP.name,
                annualAmount: action.manP.annualAmount,
                monthlyAmount: action.manP.monthlyAmount,
                expenditures: expenditureBuilder(state.expenditures, action.manP.expenditures),
                disposableIncome: action.manP.disposableIncome
            }
        default: 
            return state
    }
};

export default mansPBuilder;
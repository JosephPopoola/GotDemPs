import expenditureBuilder from './expenditureBuilder'

let initialState = {
    name: null,
    annualAmount: 0,
    monthlyAmount: 0,
    expenditures: [],
    disposableIncome: 0
};

const mansPBuilder = (state = initialState, action) => {
    console.log(action.type);
    switch(action.type){
        case 'ADD_MANS_PS_TO_USER': 
            return {
                name: action.name,
                annualAmount: action.percentage,
                monthlyAmount: action.monthlyAmount,
                expenditures: expenditureBuilder(state.expenditures, action.manP.expenditures),
                disposableIncome: action.disposableIncome
            }
        default: 
            return state
    }
};

export default mansPBuilder;
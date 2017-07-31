const initialState = {
    name: null,
    annualAmount: 0,
    monthlyAmount: 0,
    expenditures: [],
    disposableIncome: 0
}

const mansPs = (state = initialState, action) => {
    switch(action.type){
        case 'SET_MANSPS_NAME':
            return Object.assign({}, state, {
                name: action.name
            });
        case 'SET_MANSPS_ANNUAL_AMOUNT':
            return Object.assign({}, state, {
                annualAmount: action.annualAmount
            });
        case 'SET_MANSPS_MONTHLY_AMOUNT':
            return Object.assign({}, state, {
                monthlyAmount: action.monthlyAmount
            });
        case 'SET_MANSPS_EXPENDITURES':
            return Object.assign({}, state, {
                expenditures: action.expenditures
            });
        case 'SET_MANSPS_DISPOSABLE_INCOME':
            return Object.assign({}, state, {
                disposableIncome: action.disposableIncome
            });
        default: 
            return state
    }
};

export default mansPs;
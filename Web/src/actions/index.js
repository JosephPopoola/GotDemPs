// USER
export const setUserName = (name) => ({
    type: 'SET_USER_NAME',
    name
});

export function addDeductionToUser (name){
    return {type: 'ADD_DEDUCTION_TO_USER', name};
}

export function addMansPsToUser (manP){
    return {
        type: 'ADD_MANS_PS_TO_USER',
        manP
    }
};

// DEDUCTIONS
export function addDeduction (deduction){
    console.log('running');
    return function(dispatch){
        dispatch({
            type: 'ADD_DEDUCTION',
            deduction,
        });      
    }
}

//MANS PS
export function addExpenditure (expenditure){
    console.log('doing it')
    return {
        type: 'ADD_EXPENDITURE',
        expenditure
    }
};
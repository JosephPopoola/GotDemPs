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

export function addMansP(){
    return {
        type: 'ADD_MANS_P'
    }
};

//MANS PS
export function addExpenditure (expenditure){
    console.log('doing it')
    return {
        type: 'ADD_EXPENDITURE',
        expenditure
    }
};
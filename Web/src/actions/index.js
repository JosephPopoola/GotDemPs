// USER
export const setUserName = (name) => ({
    type: 'SET_USER_NAME',
    name
});

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

export function addExpenditure(){
    return {
        type: 'ADD_EXPENDITURE'
    }
};
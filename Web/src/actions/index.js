// USER
export const setUserName = (name) => ({
    type: 'SET_USER_NAME',
    name
});

export function saveMansP (user){
    return {
        type: 'SAVE_MANS_P',
        user
    }
};

export function addMansP(){
    return {
        type: 'ADD_MANS_P'
    }
};

export function addExpenditure(mansP){
    return {
        type: 'ADD_EXPENDITURE',
        mansP
    }
};
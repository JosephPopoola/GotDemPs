import newEntryExistsInArray from '../helpers/newEntryExistsInArray'

const initialState = {
    name: null,
    value: 0,
}

const expenditureBuild = (state = initialState, action) => {
    console.log('build one for man still');
    return {
        name: action.name,
        value: action.value
    }
};

const expenditureBuilder = (state = initialState, action) => {
    console.log(action);
    console.log('DOING IT NOWWWWWWWWWWWWWW');
    switch(action.type){
        case 'ADD_EXPENDITURE':
            if(newEntryExistsInArray(state.expenditures, action)){
                return state
            }
            else{
                return{
                    ...state,
                    expenditures: [...state.expenditures, expenditureBuild(undefined, action)]
                }
            }      
        default: 
            return state
    }
};


export default expenditureBuilder;
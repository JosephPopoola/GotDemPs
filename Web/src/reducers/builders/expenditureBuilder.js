import newEntryExistsInArray from '../helpers/newEntryExistsInArray'

const initialState = {
    name: null,
    value: 0,
}

const expenditureBuild = (state = initialState, action) => {
    return {
        name: action.name,
        value: action.value
    }
};

const expenditureBuilder = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_EXPENDITURE':
            if(newEntryExistsInArray(state.expenditures, action)){
                return state
            }
            else{
                if(state.expenditures.map(m => m.name).includes('')){
                    state.expenditures.splice(0,1);
                }
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
const addToArrayIfNew = (state, existingArray, newItem) => {
    let index = existingArray.findIndex((x) => x.name === newItem.name); 
            if(index > -1){
                return state
            }
            else{
                return {
                    ...state,
                    arr: existingArray.concat(newItem)
                }
            }
}

export default addToArrayIfNew;


const newEntryExistsInArray = (existingArray, newItem) => {
        if(existingArray.map(m => m.name).includes(newItem.name)){
            return true
        }
        else{
            return false
        }
}

export default newEntryExistsInArray;


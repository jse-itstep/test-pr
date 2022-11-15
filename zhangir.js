const deleteOddFromArray = (arr) => {
    let onlyEven = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            onlyEven.push(arr[i])
        }
        return onlyEven
    }
}

let arr = [1,2,3,4,5,6,7,8,9]
deleteOddFromArray(arr);

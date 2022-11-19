let arr = [0,1,4,6,7,4,5,9,7,6,5,2]

function oddDelete(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            array.splice(i, 1)
            i--
        }else{
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(oddDelete(arr))
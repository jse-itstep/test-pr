let deleteOdds = arr => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}
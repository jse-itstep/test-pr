function removeOdd(arr) {
    // let arrNew = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            arr.push(i);
        }
        return arr;
    }
}

console.log( removeOdd([1,2,3,4,5]) );
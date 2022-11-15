Функция которая принимает массив и вернет новый массив где нет нечетные числа

let array = (arr) => {
     let putNum = [];
     for(let i = 0; i < arr.length; i++){
         if(arr[i] % 2 === 0){
             putNum.push(arr[i])
         }
         return putNum
     }
 }
 let arr = [1,2,3,4,5,6,7,8,9]
 array(arr);
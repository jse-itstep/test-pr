function sum(mass) {
    let newmass = []
    for(let i=0; i<mass.lenght; i++){
        if(mass[i] % 2 == 0) {
            newmass.push(mass[i])
        }
    }
    return newmass
}
let num = [1,2,3,4,5,6,7,8,9] 
let new_mass = sum(num)

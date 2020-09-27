const arr = [25,42,35,11];

function even(i) {
   return i => i%2 ===0;
}

function cuantosCumplen(){
    let cant = 0;
    for (i in arr){
        const isTrue = arr.some(even); // devuelve true o false
        if(isTrue){
            cant++;
        }
        return cant;
    }
}
console.log("Cantidad de pares es :"+ cuantosCumplen());


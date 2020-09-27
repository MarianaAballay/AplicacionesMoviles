
function notas(a,b,c,d){
const notasA = [a,b,c,d];
const aprobo = (element) => element >= 4;
console.log(notasA.every(aprobo));

}
notas(4,5,7,1)
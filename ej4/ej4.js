const buscandoPar = [1,2,5,3,6,8,12,14,17,21];

const algunoEsPar = (element) => element %2 === 0;

console.log(buscandoPar.some(algunoEsPar));
let numeros = [5, 2, 8, 1, 9];

numeros.sort(function(a, b){
    return a - b;
});

console.log(numeros); // Imprimirá [1, 2, 5, 8, 9]

const calculadora = require('./calculadora');

// Exemplo de uso das funções do módulo calculadora
const a = 10;
const b = 5;

console.log(`Soma: ${calculadora.somar(a, b)}`);

console.log(`Subtração: ${calculadora.subtrair(a, b)}`);

console.log(`Multiplicação: ${calculadora.multiplicar(a, b)}`);

console.log(`Divisão: ${calculadora.dividir(a, b)}`);
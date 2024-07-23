import { isValidCnpj, cnpjGenerator, cnpjFormat } from './src/cnpj.js';

console.log(isValidCnpj('03.170.763/0001-79')) // result: true
console.log(isValidCnpj('03170763000179')) // result: true

console.log(isValidCnpj('A3.170.7X3/0001-36')) // result: true
console.log(isValidCnpj('A31707X3000136')) // result: true

console.log(isValidCnpj('03.170.763/0001-12')) // result: false
console.log(isValidCnpj('03170763000112')) // result: false

console.log(isValidCnpj('A3.170.7X3/0001-20')) // result: false
console.log(isValidCnpj('A31707X3000120')) // result: false


console.log(cnpjGenerator())
console.log(cnpjGenerator('50'))
console.log(cnpjGenerator('2522106 000111'))
console.log(cnpjGenerator('X5 2106 000111'))


console.log(cnpjFormat('X5.S21.06W/0001-00'))
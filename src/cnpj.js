/* 
MIT License

Copyright (c) 2024 eduardomotta-emottasistemas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

export const isValidCnpj = (cnpj) => {
  const digitWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const formattedCNPJ = String(cnpj).replace(/\W+/g, "");
  const calculateDigit = (cnpjBase, factors) => {
    const calculatedModule = sumDigits(cnpjBase, factors) % 11
    
    return (calculatedModule < 2 ? 0 : 11 - calculatedModule)
  }
  const sumDigits = (cnpjBase, factors) => (factors.reduce((accumulator, currentValue, index) => accumulator + ((cnpjBase[index].charCodeAt(0) - 48) * currentValue) , 0))

  if (formattedCNPJ.length !== 14) return false;

  if (formattedCNPJ[12] !=  calculateDigit(formattedCNPJ, digitWeights) || 
      formattedCNPJ[13] != calculateDigit(formattedCNPJ, [6, ...digitWeights])) return false;

  return true;
};

export const cnpjGenerator = (cnpj) => {
  let newCnpj = cnpj === undefined ? " ".repeat(8) + '000100' : String(cnpj)
  const myRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  for (let i = 0; i < 15; i++) {
    newCnpj = newCnpj.replace(" ", String.fromCharCode(myRandom(48, 90)) );
  }

  newCnpj = newCnpj.replace(/\W+/g, "").padStart(14, '0').toUpperCase();

  for (let i = 0; i < 100; i++) {
    newCnpj = newCnpj.slice(0, 12) + String(i).padStart(2, '0');

    if (isValidCnpj(newCnpj)) break
}

  return newCnpj;
};

export const cnpjFormat = (cnpj) => {
  // Usando substring para extrair partes da string
  const cnpjBase = String(cnpj).replace(/\W+/g, "")
  const part1 = cnpjBase.substring(0, 2);
  const part2 = cnpjBase.substring(2, 5);
  const part3 = cnpjBase.substring(5, 7);
  const part4 = cnpjBase.substring(7, 8);
  const part5 = cnpjBase.substring(8, 12);
  const part6 = cnpjBase.substring(12, 14);
  
  return `${part1}.${part2}.${part3}${part4}/${part5}-${part6}`;
}
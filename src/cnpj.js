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

const isValidCnpj = (value) => cnpjValidator(value);

const cnpjValidator = (cnpj) => {
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

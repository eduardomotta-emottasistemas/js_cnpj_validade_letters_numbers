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

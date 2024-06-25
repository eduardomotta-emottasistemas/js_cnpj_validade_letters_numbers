# Rotina para calcular cnpj válido considerando letras e números:

isValidCnpj('03.170.763/0001-79') // result: true
isValidCnpj('03170763000179') // result: true

isValidCnpj('A3.170.7X3/0001-36') // result: true
isValidCnpj('A31707X3000136') // result: true

isValidCnpj('03.170.763/0001-12') // result: false
isValidCnpj('03170763000112') // result: false

isValidCnpj('A3.170.7X3/0001-20') // result: false
isValidCnpj('A31707X3000120') // result: false

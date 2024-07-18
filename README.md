## CNPJ
Validates CNPJ with numbers and letters

### Installation
```bash
npm i @emotta/js-cnpj-validate-letters-numbers
```

### Usage
```js
import { isValidCnpj } from '@emotta/js-cnpj-validate-letters-numbers';
```
If an error happens in Import check package.json and add: "type": "module"
example package.json:
```json
{
  "main": "index.js",
  "type": "module",
  "dependencies": {
    "@emotta/js-cnpj-validate-letters-numbers": "^1.0.5"
  }
}
```

Usage Example:
```js
isValidCnpj('03.170.763/0001-79') // result: true
isValidCnpj('03170763000179') // result: true

isValidCnpj('A3.170.7X3/0001-36') // result: true
isValidCnpj('A31707X3000136') // result: true

isValidCnpj('03.170.763/0001-12') // result: false
isValidCnpj('03170763000112') // result: false

isValidCnpj('A3.170.7X3/0001-20') // result: false
isValidCnpj('A31707X3000120') // result: false
```

### License
[MIT License](https://github.com/eduardomotta-emottasistemas/js_cnpj_validate_letters_numbers/blob/main/LICENSE.txt) &copy; [Eduardo Motta](https://github.com/eduardomotta-emottasistemas)

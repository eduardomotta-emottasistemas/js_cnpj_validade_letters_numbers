/**
 *
 * @param {string} value - CNPJ number may also contain letters and mask.
 * @returns {boolean} - Returns true for valid CNPJ or false for invalid.
 */
export declare function isValidCnpj(cnpj: string): boolean;

/**
 *
 * @param {string} value - optional CNPJ parameter to generate a random CNPJ. If the CNPJ is passed where it is blank, it fills in with a random number or letter.
 * @returns {string} - Returns random CNPJ.
 */
export declare function cnpjGenerator(cnpj: string): boolean;

/**
 *
 * @param {string} value - CNPJ number may also contain letters and mask.
 * @returns {string} - Returns formated CNPJ.
 */
export declare function cnpjFormat(cnpj: string): boolean;

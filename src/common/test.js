//@ts-check
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
const add = (a, b) => {
    return a + b;
}

/**
 * @param {Object} params 函数的参数
 * @param {string} params.requiredProp 必传
 * @param {boolean} [params.optionalProp] 可选
 *
 * @returns {number} 返回值
 */
const test = (params) => {
    // return 'no error';
    return 1;
}

export { add, test };
export function isNumber(obj) {
  return obj === +obj
}

/**
 * 求和
 * @param {Array<number>} arr
 */
export function sum(arr) {
  let sum = 0;
  arr.forEach(e => {
    if (isNumber(e)) sum = sum + e
  });
  return sum;
}

/**
 * 求平均
 * @param {Array<number>} arr
 */
export function mean(arr) {
  let sum = 0;
  let total = 0;
  arr.forEach(e => {
    if (!isNumber(e)) return;//忽略非数字数据
    sum += e;
    total += 1;
  });
  return (sum / total).toFixed(2);
}

/**
 * 求方差
 * @param {Array<number>} arr
 */
export function variance(arr) {
  arr = arr.filter(e => isNumber(e));
  let _avg = mean(arr);
  let res = 0;
  arr.forEach(e => {
    res += Math.pow(e - _avg, 2);
  });
  return res / arr.length;
}

/**
 * 标准差
 * @param {Array<number>} arr
 */
export function StandardDeviation(arr) {
  return Math.sqrt(variance(arr));
}

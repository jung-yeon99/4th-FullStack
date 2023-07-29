const arr = [1,2,3,4,5];

const f1 = n => n ** 2;
const f2 = n => Math.sqrt(n);
const f3 = n =>  n ** 3;

const a = arr.map(f1).map(f2).map(f3);

const result3 = [f1,f2,f3].reduce((acc,f) => f.map(f),arr);
/**           acc                  f
 *       1) [1,2,3,4,5]         f1  [f1(1), .. ] 
 *       2) [f1(1),f1(2) .. ]   f2  [f2(f1(1)), ..]
 */

console.log(a);
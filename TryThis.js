const myArr = [1,2,3,4];

const push = (arr, ...appendValues) => [...arr , ...appendValues];
const pop = (arr,cnt = 1) => arr.slice(arr.length - cnt);
/**
 * 내장 함수를 쓰지 않는 방식
 * const pop = (arr, cnt = 1) => { 
 * const rets = [];
 * for(let i = 0; i < cnt; i += 1){
 *  rets = [...rets,arr[arr.length-(i+1)]]
 *  }
 *  return rets?.length === 1 ? rets[0]:rets;
 * };
 */
const unshift = (arr, ...appendValues) => [...appendValues, ...arr];
const shift = (arr,cnt = 1) => arr.slice(cnt);
// 조작이 필요할때는 splice()
console.log(push(myArr,5,6));
console.log(pop(myArr));
console.log(pop(myArr, 2));
console.log(unshift(myArr,0));
console.log(unshift(myArr,7,8));
console.log(shift(myArr));
console.log(shift(myArr,2));
console.log(myArr);
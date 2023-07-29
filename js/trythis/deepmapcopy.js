const arr = [1,2,3];
const hong = ['kim', 'hong', 'park'];
const kim = {
    zs : new Set ([arr, hong]),
    zws : new WeakSet([arr,hong]),
    zm : new Map([[1, arr]]),
    zwm : new WeakMap([[hong, arr]]),
    dog : lucy,
};


function deepCopy(obj) {
   if(obj === )
  }
  
const kim2 = deepCopy(kim);
kim2.zs = ([22,'jung']);

console.log(kim);
console.log("================");
console.log(kim2);

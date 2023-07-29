const kim = {
	nid : 3,
	addr : 'Pusan',
	arr : [1,2,3,{aid : 1}, [10,20]],
	oo : {id : 1, name : 'Hong', addr: {city: 'Seoul'}},
	xx : null,
	yy : function() {console.log(this.oo);},
    [Symbol()] : 9,
    [Symbol()] : Symbol('symbol2'),
};
// assert 사용해서, 비교하면 됨
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    const copy = Array.isArray(obj) ? [] : {};
    // [] = new Array() , {} = new Object()
  
    for (let key in obj) {
      copy[key] = deepCopy(obj[key]);
    }

    const reflectobj = Reflect.ownKeys(obj);
    for(let reflect of reflectobj){
        copy[reflect] = deepCopy(obj[reflect]);
    }

    /* 
    const symbols = Object.getOwnPropertySymbols(obj);
    for (let symbol of symbols) {
      copy[symbol] = deepCopy(obj[symbol]);
    } 
    */

    return copy;
  }
  
const kim2 = deepCopy(kim);
kim2.nid = 4;
kim2.addr = "Seoul";

console.log(kim);
console.log(kim2);

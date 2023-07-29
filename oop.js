const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };

const arr = [1, 2, 3, 4, 5];

Object.defineProperty(Array.prototype, 'firstObject', {
    get: function () {
      return this[0];
    }
}); //1      
Object.defineProperty(Array.prototype, 'lastObject', {
    get: function () {
      return this[arr.length - 1];
    }
}); //5
/** firstObject와 lastObject 라는 속성을 정의, 첫번째와 마지막의 값을 가져오기 위해 return */

const users = [hong, kim, lee]; //{id:1, name: 'Hong'}, …

Array.prototype.mapBy = function(key) {
    return this.map(x => x[key]);
};
/** 배열의 요소에 있는 객체에 key에 해당하는 속성 값으로 새로운 배열로 만듬 */
Array.prototype.findBy = function(key, value) {
    return this.find(x => x[key] === value);
};
Array.prototype.filterBy = function(key, value) {
    return this.filter(x => x[key] === value);
};
/*
* 해당 객체에서 key에 해당하는 속성 값이 value와 일치하는 것을 return
* find = 조건을 만족하는 첫 번째 요소를 반환
* filter = 조건을 만족하는 모든 요소를 새로운 배열로 반환
*/
Array.prototype.objectAt = function(index) {
    return this[index];
};
/** 배열의 해당하는 인덱스 값을 가져와서 반환 */

console.log(arr.firstObject); //1
console.log(arr.lastObject); //5

console.log(users.mapBy('id')); //[1, 2, 3]
console.log(users.mapBy('name')); //['Hong', 'Kim', 'Lee']
console.log(users.findBy('name', 'Kim')); //{id: 2, name: 'Kim'}
console.log(users.filterBy('id', 2)); //[{id: 2, name: 'Kim'}]
console.log(users.objectAt(1)); //{id: 2, name: 'Kim'}
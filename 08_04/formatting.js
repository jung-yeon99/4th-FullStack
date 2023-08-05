// 결과 값이 나오도록 fmt 함수를 작성하시오.
const total = {price : 45000, vat : 4500};

String.prototype.fmt = function () {
    let result = "";
    const firstIndex = arguments[0];
    const expressions = Array.from(arguments).slice(1);

    for (let i = 0; i < firstIndex.length; i++) {
      result += firstIndex[i];
      if (expressions[i]) {
        result += expressions[i].toLocaleString() + "원";
      }
    }
    return result;
  };
// function fmt (price,vat) {
//     return `${total.price.toLocaleString()}`;
// }
console.log(fmt`주문합계 : ${total.price}원`);
console.log(fmt`세액합계 : ${total.vat}원`);
//문자열에 한글이 있는지 체크하는 hasHangul(str) 함수를 작성하시오

const hasHangul = (str) => {
    const regex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return regex.test(str);
}

const a = hasHangul("강원도"); //true
console.log("🚀  a:", a);
const b = hasHangul("ㄱㄴㄷ"); //true
console.log("🚀  b:", b);
const c = hasHangul("ㅜㅜㅠㅜㅠ"); //true
console.log("🚀  c:", c);
const d = hasHangul("케익뷐"); //true
console.log("🚀  d:", d);
const e = hasHangul("12345"); //false
console.log("🚀  e:", e);
const f = hasHangul("IC"); //false
console.log("🚀  f:", f);
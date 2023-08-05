const str = 'Senior Coding Learning JS';
// '*s*-enior *c*-oding *l*-earning *j*-*s*-'
const UppertoLower = (str) => {
    return str.replace(/[A-Z]/g, (match) => {
        return '*' + match.toLowerCase() + '*-';
      });
//정규식에 의해 걸러진 대문자(S,C,L,JS)들을 소문자로 바꾸고, 
};

console.log(UppertoLower(str)); 

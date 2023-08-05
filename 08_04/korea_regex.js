// 문자열이 한글 자음으로 끝나는지 체크 하는 isEndJaum(str)을 작성하시오.
isEndJaum = (str) => {
    const regex = str.charCodeAt();
    return Korean(regex);
}

isEndJaum('강원도'); //false
isEndJaum('바라당'); //true
isEndJaum('ㅜㅜ'); //false
isEndJaum('케잌'); //true
isEndJaum('점수 A'); //fasle
isEndJaum('알파벳L'); //true
isEndJaum('23'); //true
isEndJaum('24'); //false
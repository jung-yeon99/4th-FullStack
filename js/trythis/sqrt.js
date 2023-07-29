/**
 * TT - p.42 
 * 1) 1 ~ 10 사이의 무리수 출력 (소수점 3자리까지)
 * - 정수는 제외
 * - 소수점 3자리 (6 ==> 2.645)
 */

function printSqrt(start = 1, end = 10) {
    for (let i = start; i <= end; i++) {
        const sqrt = Math.sqrt(i);
        if (sqrt % 1 === 0) continue;

        const sqi = Math.floor(sqrt * 1000);
        const ret = sqi / 1000;
        console.log(`${i} ==> \t ${ret}${sqi % 10 === 0 ? '0' : ''}`)
    }
}

printSqrt(20,30);
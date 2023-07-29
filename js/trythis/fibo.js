//피보나치 재귀함수 코드
let runCnt = 0;
function fibonacciRecursive(n) {
	runCnt++;
	if(n < 2) return n;
	return fibonacci(n-2) + fibonacci(n-1);
}

function fibonacciLoop(n){
	const arr = [0,1];
	for(let i = 2; i<=n; i++){
		arr[i] = arr[i-2] + arr[i-1];
	}
return arr[n];
} //memoized 할 시간 없기에 이렇게 짜야 굳

function memoized(fn){
    const memoizedTable = {};
    return function(k) {
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    }
} // 성능을 요하는 작업을 진행할때는 memoized => 순수함수의 1규칙

const memoizedfibonacci = memoized(function(){
    runCnt++;
	if(n < 2) return n;
	return memoizedfibonacci(n-2) + memoizedfibonacci(n-1);
})

console.time('X');
// for(let i=0; i<40; i+=1){
// 	runCnt = 0;
// console.log(`${i},${fibonacci(i)},${runCnt}회`);
// }
console.timeEnd('X');

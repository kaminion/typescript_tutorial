import add from './util';

var hello = "hello";
let hello2 = "hello2";

// 약속의 이행과 취소 Promise, 추상화된 내용
// ES5에 없는 새로운 유형의 타입이기 때문에, 별도 Polyfill이 필요하다.
let timeoutPromise = new Promise((resolve, reject)=>
{
    setTimeout(()=>
    {
        resolve("1 sec");
    }, 1000)
})

timeoutPromise.then(console.log);
console.log(add(1, 2));
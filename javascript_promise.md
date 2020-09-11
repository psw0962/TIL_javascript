**javascript_promise**

// Promise is a Javascript object for asynchronous operation. // promise를 공부하며 중점적으로 살펴봐야할 2가지  
  
1) 상태: 무거운 operation을 수행하고있는 중인지 기능수행이 완료가 되어서 성공 또는 실패했는지  
2) 제공자와 사용자의 차이: 프로듀서와 컨슈머의 다른 견해 이해하기  
  
// state: pending -> fulfilled or rejected  
// Producer vs consumer  

```javascript  
// 1.resolve

// Producer
// when new Promise is created, the executor runs automatically.  
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        resolve('nick');
    }, 2000);
});

// consumer: then, catch, finaaly
promise.then((value) => {
    console.log(value); // nick
});

// 2. reject

// Producer 
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        reject(new Error('no network'));
    }, 2000);
});

// 2. consumer: then, catch, finaaly
promise.then((value) => {
    console.log(value); // Uncaught error
});
```  
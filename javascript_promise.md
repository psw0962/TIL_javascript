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

// consumer: then, catch, finaaly
promise.then((value) => {
    console.log(value); // Uncaught error
});

// 3. catch

// Producer 
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        reject(new Error('no network'));
    }, 2000);
});

// consumer: then, catch, finaaly
promise
.then((value) => {
    console.log(value);
})

.catch(error => {
    console.log(error); // 위 처럼 Uncaught error 가 아닌 error 로 출력된다
});

// 3. finally(성공하든 실패하든 무조건 호출됨)

// Producer 
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        reject(new Error('no network'));
    }, 2000);
});

// consumer: then, catch, finally
promise
.then((value) => {
    console.log(value);
})

.catch(error => {
    console.log(error);
})

.finally(() => {
    console.log('finally');
});

// 4. promise chaining

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num)); // 5

// 4. Error Handing

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resilve('chicken'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => egg`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} =>fried eggs`), 1000);
    });


getHen()
 .then(hen => getEgg(hen))
 .then(egg => cook(egg))
 .then(meal => console.log(meal)); // chicken => egg => fried egg

// 줄여서 쓸 수 있다!
 getHen() //
 .then(getEgg)
 .then(cook)
 .then(console.log);

// catch, reject

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resilve('chicken'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} =>fried eggs`), 1000);
    });

getHen() //
    .then(getEgg)
    .catch(error => {
        return 'bread';    // 중간에 catch를 사용하여 오류를 확인하면 맨 하단 console.log 처럼 출력된다
    })
    .then(cook)
    .then(console.log) // chicken => egg => fried egg
    .catch(console.log); // bread => fried egg
```  
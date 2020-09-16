// async & await
// clear style of using promise

```javascript
// 1. async

async function fetchUser() { // async 키워드를 넣으면 코드 블럭이 Promise로 자동으로 바뀐다
    // return new Promise((resolve, reject) => {
    //     resolve('nick');
    // });
    return 'nick'; // 위 코드를 생략가능하다!
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function GetBanana() {
    await delay(1000);
    return 'banana';
}


async function pickFruits() {
    const apple = await getApple();
    const banana = await GetBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 위 처럼 async와 await을 통해 return값이나 Promise를 기입하지 않고 쓸 수 있다



// await 병렬처리가 가능한 경우
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function GetBanana() {
    await delay(1000);
    return 'banana';
}


async function pickFruits() {
    const applePromise = getApple();  // 병렬처리
    const bananaPromise = GetBanana();  // 병렬처리

    const apple = await applePromise();
    const banana = await bananaPromise();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log); // 2초가 걸리는 코드를 1초만에 처리할 수 있다

// 하지만 이 경우 코드를 위처럼 쓰지는 않는다(아래처럼 APIs를 활용하자!)
// useful Promise APIs
// 1) Promise.all

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

async function GetBanana() {
    await delay(1000);
    return 'banana';
}

function pickAllFruits() {
    return Promise.all([getApple(), GetBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

// 2) Promise.race
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return 'apple';
}

async function GetBanana() {
    await delay(1000);
    return 'banana';
}

function pickOnlyOne() {
    return Promise.race([getApple(), GetBanana()]);
}

pickOnlyOne().then(console.log); // banana (제일 먼저 전달되는 것을 출력)
```
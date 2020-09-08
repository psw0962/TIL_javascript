**// 1. 동기와 비동기**  
  
// synchronous(동기)  
// 정해진 순서에 맞게 코드가 실행된다  
```javascript
console.log('1'); // 1
console.log('2'); // 2
console.log('3'); // 3

// asynchronous(비동기)
// 언제 코드가 실행될지 예측할 수 없는것
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
// 1 3 2
```  
  
**// synchronous callback and asynchronous callback**  
  
```javascript
// 1) synchronous callback
function printImmediately(print) {
print();
}
printImmediately(() => console.log('hello')) // 1 3 hello 2

// 2) asynchronous callback
function printWithDelay(print, timeout) {
setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 1 3 hello 2 async callback
  
//------------------정리----------------------

console.log('1'); //동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기
function printImmediately(print) {
print();
}
printImmediately(() => console.log('hello')) // 동기 1 3 hello 2

function printWithDelay(print, timeout) {
setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기 1 3 hello 2 async callback
// 1 3 hello 2 async callback
```  
  
**// callback Hell example** 
```javascript
class UserStorage {
loginUser(id, password, onSuccess, onError) {
setTimeout(() => {
if (
(id === 'nick' && password === 'asdf') ||
(id === 'coder' && password === 'academy')
) {
onSuccess(id);
} else {
onError(new Error('not found'));
}
}, 2000);
}

getRoles(user, onSuccess, onError) {
    setTimeout(() => {
        if (user === 'nick') {
            onSuccess({ name: 'nick', role: 'admin' });
        } else {
            onError(new Error('on access'));
        }
    }, 1000);
}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser( // 사용자의 정보를 받아와서
id,
password,
user => {
userStorage.getRoles( // 무슨역할을 하는지 한눈에 확인하기가 굉장히 어렵다
user,
userWithRole => {
alert(
Hello ${userWithRole.name}, you have a ${userWithRole.role} role
);
},
error => {
console.log(error);
}
);
},
error => {
console.log(error);
}
);

// 1) 읽기가 힘들다
// 2) 어디가 어디서 부터 연결되어 있는지 확인이 어렵다
// 3) 에러발생시 또는 디버깅을해야할(유지보수) 경우 굉장히 힘들다
// 다음 시간에 promise와 함께 콜백지옥 코드를 수정해 보겠다!
```

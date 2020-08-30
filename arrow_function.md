**Function의 구조**  
함수는 아래와 같은사진의 구조로 입력값을 받고 잘 처리한 후 리턴하는 것이 함수이다!  
  
![1](https://media.vlpt.us/images/psw0962/post/b4832f69-99ac-4163-8b6f-84bc47d2ce32/image.png)  
  
이와같은 구조이기 때문에 함수의 이름을보고 이 함수는 이런일을 하겠구나 하고 예측할 수 있다. 즉, input과 output function의 이름을 잘 짓는것이 중요하다!  
  
**1. Function declaration**  
1) function name(paraml, paraml2) {body... return;}  
->이런 구조로 함수를 만든다  
  
2) one function === one thing  
->하나의 함수는 한가지의 일만하도록 만든다  
  
-naming: doSimething, command, verb  
->이와같은 형태로 이름을 짓는다  
  
ex) createCardAndPoint -> createCard, creatPoint  
-> 먄약 createCardAndPoint의 함수를 만든다면 하나의 형태보다는  
createCard, creatPoint로 나누어 만들 수 있지는 않을지 생각해 보아야한다  
  
3) fuction is object in Js  
자바스크립트에서 함수는 객체에 해당된다 때문에 함수를 변수에다가 할당할 수 있고 paraml로  
전달이되고 함수를 리턴할 수도 있게 되는것이다  
  
**2. parameters**  
```javascript
function changeName(obj) {
obj.name = 'coder';
}

const a1 = { name: 'a1'};
changeName(a1);
console.log(a1); // { name: 'coder' }
```  
  
**3. Default parameters (added in ES6)**  
```javascript
function showMessage(message, from = 'unknown') {
console.log(${message} by ${from});
}
showMessage('Hi!'); // Hi! by unknown
```  
  
**4. Rest parameters (added in ES6)**  
```javascript
function printAll(...args) {
for (let i = 0; i < args.length; i++) {
console.log(args[i]);
}
}
printAll('dream', 'coding', 'a1'); //dream coding a1
```  
  
**5. Local scope**  
**밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다!!**  
  
```javascript
let globalMessage = 'global'; // global variable
function prontMessage() {
let message ='hello';
console.log(message); // local variable
console.log(globalMessage); // 가능하다!!!
}
printMessage();
console.log(message); // 불가하다!!!

// 중첩된 함수에서도 마찬가지!
let globalMessage = 'global'; // global variable
function prontMessage() {
let message ='hello';
console.log(message); // local variable
console.log(globalMessage);
function printAnother() {
let childMessage = 'hello';
}
console.log(childMessage); // 불가하다!!!
}
printMessage();
```  
  
**6. Return a value**  
```javascript
function sum(a, b) {
return a + b;
}
const result = sum(1, 2); // 3
console.log(sum: ${sum(1, 2)});
```  
  
**7. Function expression**  
```javascript
function sum(a, b) {
return a + b;
}
const result = sum(1, 2); // 3
console.log(sum: ${sum(1, 2)});

const print = function () { // 이름이 없는 함수(anonymous function)
console.log('print'); // print
};
print();
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4
```  
  
**8. Callback function**  
```javascript
function randomQuiz(answer, printYes, printNo) {
if (answer === 'love you') {
printYes();
} else {
printNo();
}
}

const printYes = function () {
console.log('yes!');
};

const printNo = function () {
console.log('no!');
};
randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!
```  
  
**9. Arrow function**  
```javascript
const simplePrint = function () {
console.log('simplePrint!');
};
// -> 이와같은 형태으 함수를 아래처럼 바꿔서 쓸 수 있다

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
return a * b;
}
// -> Arrow function의 예시
```
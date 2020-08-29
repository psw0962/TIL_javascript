**1. String concatenation**  
```javascipt
console.log('my' + ' cat');
console.log('1' + 2);
console.log(string literals: 1 + 2 = ${1 + 2});
```  
(빽틱)과 함께 ${}을 이용하게 되면 변수 값을 계산하고 포함하여 문자열을 만들어 출력해 준다  
  
**2. Numeric operators**
```javascript
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation
```  
  
**3. increment and decrement operators**
```javascript
let counter = 2;
const preIncrement = ++counter;
```  
이 코드는  
```javascript
counter = counter + 1;
preIncrement = counter;
```  
이 코드와 같다. 즉, counter 변수에 1을 더하고 preIncrement 변수에 counter값을 할당한다는 의미이다  
  
```javascript
const postIncrement = counter++;
postIncrement = counter;
counter = counter + 1;
```  
과 같다 두 가지의 차이점은  
  
1) preIncrement : 먼저 연산을 한 후 값을 변수에 할당한다  
2) postIncrement : 값을 할당한 후 연산을 한다  
  
**4. Assignment operators**  
```javascript
let x = 3;
let y = 6;
```  
  
```javascript
x += y; // x = x + y; 와 같다
x -= y;
x *= y;
x /= y;
```  
  
**5. Comparison operators**  
```javascript
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal
```  
  
**6. Logical operators: ||(or), &&(and), !(not)**  
```javascript
const value1 = true;
const value2 = 4 < 2;
```  
  
1) ||(or)  
```javascript
const a = 3;
const b = 5;
const c = (a < b) || (a > b);
console.log(c); // true
```  
-> or의 경우 조건중 하나만 true라고해도 전체가 true가 된다!  
  

2) &&(and)  
```javascript
const a = 3;
const b = 5;
const c = (a < b) && (a > b);
console.log(c); // false
```  
-> and의 경우 모든 조건이 만족되어야 true를 출력한다!  
  

3) !(NOT)  
```javascript
const a = 3;
const b = 5;
const c = !(a > b);
console.log(c); // true
```  
-> NOT의 경우 해당 조건이 true면 false를 출력하고 flase면 true를 출력한다  
  
**7. Equality**
```javascript
const stringFive = '5';
const numberFive = 5;
```  
  
1) loose equality  
```javascript
console.log(stringFive == numberFive); // treu
//-> == 는 같다의 뜻. 타입이 달라도 값이 같기 때문에 true를 출력한다
console.log(stringFive != numberFive); // false
//-> != 는 다르다의 뜻. 타입이 달라도 값이 같기 때문에 false를 출력한다
```  
  
2)stric equality  
```javascript
console.log(stringFive === numberFive); // false
//-> === 는 타입까지도 같은지를 구별해낸다. 그래서 false를 출력한다
console.log(stringFive !== numberFive); // true
//-> !== 는 타입까지도 같은지를 구별해낸다. 그래서 true를 출력한다.
```  
이와같은 이유 때문에 stric equality를 사용한다!  
  

3) object equality by reference  
```javascript
const a1 = {name: 'a1'};
const a2 = {name: 'a1'};
const a3 = a1;
```  
```javascript
console.log(a1 == a2); // false
//-> 각각 입력된 reference가 다르기 때문에 false를 출력
console.log(a1 === a2); // false
//-> 입력된 reference, type 또한 다르기 때문에 false를 출력
console.log(a1 === a3); // true
//-> a3에 a1을 할당했기때문에 true를 출력
```  
  
**8. if**
1)  
```javascript
const name = 'a1';
if (name === 'a1') {
console.log('Welcome, a1!'); // Welcome, a1!
}
//-> name 변수의 안의 값과 일치하기 때문에 Welcome, a1! 출력
```  
  
2)  
```javascript
const name = 'coder';
if (name === 'a1') {
console.log('Welcome, a1!');
} else if ( name === 'coder') {
console.log('You are amazing coder'); // You are amazing coder
}
//-> name 변수의 안의 값이 else if의 조건에서 일치하기 때문에 You are amazing coder 출력
```  
  
3)  
```javascript
const name = 'sdfsdfsdf';
if (name === 'a1') {
console.log('Welcome, a1!');
} else if ( name === 'coder') {
console.log('You are amazing coder');
} else {
console.log('unkwnon'); // unkwnon
}
//-> name 변수의 안의 값이 어떤 조건에도 일치하지 않기 때문에 unkwnon 출력
```  
  
**9. ternary operator**  
```javascript
const a1 = 'a1';
console.log(a1 === 'qweqwesd' ? 'yes' : 'no'); // no
//-> ? 뒤에 해당 조건이 맞으면 yes 아니라면 : 다음의 값을 출력한다
```  
  
**10. Switch**  
```javascript
const browser = 'IE';

switch (browser) {
case 'IE':
console.log('go away!'); // browser 변수의 값이 IE면 go away! 출력
break;
case 'chrome':
case 'firefox':
console.log('love you!'); // browser 변수의 값이 chrome 또는 firefox면 love you! 출력
break;
default:
console.log('same all!'); // 그 어떤 것도 아니면 smae all 출력
break;
}
```  
  
**11. Loops**  
```javascript
// 1)while
let i = 3;
while (i > 0) {
console.log(while: ${i});
i--;
}
// while:3
// while:2
// while:1
//-> i의 시작점을 3으로 두고 i--(1씩감소) 하여 false가 나올때까지 반복한다

// 2)do-while
do {
console.log(do while: ${i}); // do while: 0
i--;
} while (i > 0);
//-> 블럭 안의 조건을 먼저 실행하고자 할때 사용

// 3)for
for (i = 3; i > 0; i--) {
console.log(for: ${i});
}
// for: 3
// for: 2
// for: 1
//-> 조건이 안맞을때까지 실행

// 예제1) 0부터10까지 짝수만 출력
for (let i = 0; i < 11; i++) {
if (i % 2 !== 0) {              //i를 2로 나눴을때 나머지가 0이 아닌 조건
continue;
}
console.log(q1. ${i});
}
// q1: 0
// q1: 2
// q1: 4
// q1: 6
// q1: 8
// q1: 10
//-> for와 if를 통해 조건을 주고 맞는 조건이 될때까지의 값을 출력할 수 있다!

//예제2) 0부터10까지 숫자를 출력하지만 8이되면 멈춰라
for (let i = 0; i < 11; i++) {
if (i > 8) {
break;
}
console.log(q1. ${i});
}
// q1: 0
// q1: 1
// q1: 2
// q1: 3
// q1: 4
// q1: 5
// q1: 6
// q1: 7
// q1: 8
//-> break를 통해 원하는 지점에서 출력을 멈출 수 있다!
```
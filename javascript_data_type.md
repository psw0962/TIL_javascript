**1. variable** 
```javascript 
let name = 'aa';  
console.log(name);  
name = 'hello';  
console.log(name);  
```
  
let이라는 키워드를 통해 값을 할당할 수 있고 할당된 값을 다시 선언해 바꿀수도 있다  
![1](https://media.vlpt.us/images/psw0962/post/05ad284a-5b44-4dc4-bfb5-6d45ce8e39c3/image.png)  

**2. Block scope** 
```javascript
{  
let name = 'aa';  
console.log(name);  
name = 'hello';  
console.log(name);  
}  
console.log(name) 
``` 
블럭밖에서는 이 블럭안에있는 변수에 접근하게되면 아무값도 출력하지 못한다  

**3. var와 hoisting**  
```javascript
age = 4;
var age;
```
  
var의 경우 변수를 선언하기전에 값을 할당해도 출력이 가능하다  
어디에 선언했는지 관계없이 선언을 맨 위로 끌어올려주는것 ->var hoisting  
  
var를 더 이상 쓰지않는 이유  
1. 변수를 선언하기전에 값을 할당해도 출력이 가능하다  
2. var는 block scope 밖에있든 안에 있든 호출이 가능하다  
-> 이와 같이 할당 하지도 않은 값들이 출력될 수 있기 때문에 var는 쓰지 않는다  
그래서 let과 const라는 선언을 하게 된다  

**4. let과 global scope**  
```javascript
let globalName = 'global name';
{
let name = 'aa';
console.log(name);
name = 'hello';
console.log(name);
consloe.log(globalName);
}
console.log(name);
consloe.log(globalName);
```  
  
이 경우에는 안에있든 밖에있든 변수에 접근 할 수 있다  
(block scope안에 있어도 밖에 있어도 호출가능)  
global 변수같은 경우 실행되는 순간부터 끝날때까지 항상 메모리에 탑재되어 있기때문에 최소한으로 쓰는것이 좋고 가능하면 class,   함수, if, forloop 필요한 부분에서만 정의해서 쓰는것이 좋다  

**5. const**  
const의 경우 할당한 값을 변경할 수 없다  
위에서 봤던 let을 통해 변수를 선언하는 것과 달리 const는 변경이 불가능하다  
![2](https://media.vlpt.us/images/psw0962/post/d843a868-73ff-4525-9dfe-0bd56dd162a1/image.png)  
값이 계속 변경될 수 있는 타입 = Mutable data type (let)  
값이 계속 변경되지 않는 타입 = Immutable data type (const)  
  
Immutable data type 선호 하는 이유  
1) 보안(security)  
2) 다양한 thread들이 동시에 변수에 접근하여 값 변경 가능하기 때문에 위험(thread safety)  
3) 코드를 변경하거나 다른 개발자가 코드를 바꿀때도 실수 방지(reduce human mistakes)  
  
**6. variable types**  
1) primitive type (더 이상 작은 단위로 나뉘어질 수 없는 한가지 아이템)  
single item: number, string, boolean, null, nudefindn, symbol  
  
2) object type(single item을 여러개로 묶어서 한 box로 묶어서 관리)  
function, first-class function -> 다른 데이터타입 처럼 변수에 할당이 가능하고 그렇기 때문에 함수에 인자로도 전달 가능,   리턴타입으로도 리턴가능  
  
**7. data types(number)**
```javascript
const count = 17; // integer
const size = 17.1; // decimal number
javascript의 경우 숫자로 선언하면 number의 type으로 할당된다
```
  
```javascript
const infinity = 1 / 0;  
const negativeInfinity = -1 / 0;  
const nAn = 'not a number' / 2;  
console.log(infinity);  
console.log(negativeInfinity);  
console.log(nAn);  
```
-> 이 처럼 연산을 할때 숫자가 무한대인 값을 출력하게하거나 문자열로 인식을 하게 하면 에러가 생길 수 있기 때문에 유의해야 한다  
  
javascript의 number의 경우 -2의 53승부터 ~ 2의 53승까지의 범위까지만 표현가능했다  
  
하지만 최근 bigint 타입이 추가되었다(아직 chome과 firefox 브라우저 에서만 가능)  
-> 숫자 맨 마지막에 n 을 붙히면 bigint로 간주  
![3](https://media.vlpt.us/images/psw0962/post/c221164a-a176-4646-9441-0a10aa547782/image.png)  
  
**8. data types(string)**
```javascript
const char = 'c'; //c
const brendan = 'brendan'; //brendan
const greeting = 'hello' + brendan; //hello brendan
const helloBob = hi ${brendan}!; // hi brendan
```
-> 이와같이 (빽틱)을 사용하여 문자열을 합치는경우  
'value: ' + helloBob + ' type: ' + typeof helloBob);  
처럼 일일이 + 를 붙히지 않고 합칠 빽틱을 사용하여 만들 수 있다  
  
**9. boolean**  
1) false:0, null, nudefined, NaN, ''  
2) true: any other value  
```javascript
const canRead = ture; // true
const test = 3<1; // false
```
  
**10. null, undefined, symbol**
1) null  
let nothing = null; //value:null, type:object  
-> 아무것도 아닌 값이라고 지정(null로 값을 할당)  
  
2) undefined  
let x; //value:undefined, type:ndefined  
-> 선언은 되었지만 아무 값도 지정되어있지 않다  
  
3) symbol(고유한 식별자가 필요하거나 우선순위를 주고 싶을때 사용)  
```javascript
const symbol1 = symbol('id');
const symbol2 = symbol('id');
console.log(symbol1 === symbol2); // false
```
  
```javascript
const gSymbol1 = symbol.for('id');
const gSymbol2 = symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
```
symbol의 경우 출력시 .description을 활용해 string으로 변환해서 출력해야 한다.  
  
**11. Dynamic typing: dynamically typed language**  
```javascript
let text = 'hello'; // value:hello, type:string
console.log(value: ${text}, type: ${typeof text});
text = 1; // value:1, type:nu mber
console.log(value: ${text}, type: ${typeof text});
text = '7' + 5; // value:75, type:string
console.log(value: ${text}, type: ${typeof text});
text = '8' / '2'; // value:4, type:number
console.log(value: ${text}, type: ${typeof text});
```
  
type오류 예시  
```javascript
let text = 'hello'; // value:hello, type:string
console.log(text.charAt(0)); // h
text = '8' / '2'; // value:4, type:number
console.log(text.charAt(0)); // TypeError
```
  
이와같이 javascript는 runtime에서 type이 정해지기 때문에 이런 문제들이 많아지면서 Type Script가 나오게된다
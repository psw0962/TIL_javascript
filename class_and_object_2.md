**1. Literals and properties**  
**object만드는 방법(object는 Key: value 의 집합체이다!!)**  
```javascript
const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor
const name = 'a1';
const age = 4;
print(name, age);

function print(name, age) {
console.log(name);
console.log(age);
}
// -> 이와같은 형태는 인자가 많아지게되면 추가해야하는 것들이 많아진다
// 관리도어렵고 logical?하게 생각하기가 어렵게된다!

// 그렇기 때문에 개선하고자 아래와 같은 object형태로 만든다
function print(person) {
console.log(person.name);
console.log(person.age);
}

const a1 = { name: 'a1', age: 4 };
print(a1); // a1 4

a1.hasJob = true;
console.log(a1.hasJob); 
// 이와같이 해당 object에 추가할 수도 있다
// 이 같은 형태로(동적으로) 추가를하면 편하고 빠를수는 있지만 나중에 유지
// 보수가 굉장히 힘들고 생각지 못한 에러가 발생할 수 있어서 이 같은 형태는 피해서 코딩하는 것이 좋다

delete a1.hasJob; // 삭제도 가능하다!
console.log(a1.hasJob);
```  
  
**2. Computed properties**  
```javascript
function print(person) {
console.log(person.name);
console.log(person.age);
}

const a1 = { name: 'a1', age: 4 };

a1.hasJob = true;
delete a1.hasJob;

// 데이터접근방법
console.log(a1.name); // a1
console.log(a1['name']); // a1 스트링타입으로!!!''
a1['hasJob'] = true; // true 위에서 hasJob을 추가하고 삭제했지만 이같은 형태로도 추가가 가능하다

// .(dat)을 쓰는 경우 => 코딩하는 순간에 키에 해당하는 값을 받아오고 싶을때

// [](computed properties)를 쓰는 경우 =>쓸때는 정확히 어떤 Key가 필요한지 모를때 실시간으로 원하는 키의 값을 받아오고싶을때

//ex)
function printValue(obj, key) {
console.log(obj[key]);
}
printValue(a1, 'name');
printValue(a1, 'age');
```  
  
**3. property value shorthand**  
```javascript
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('a1', 30);

// 추가하고싶을때
function makePerson(name, age) {
return {
name, // Key와value 의 이름이 같다면 name: name, 의 형태를 대신할 수 있다
age,
};
}
console.log(person4); // { name: 'a1', age: 30 }
```  
**이와같은 작업을 아래처럼 좀 더 간편히 할 수 있다!!**  
  
**4. Constructor Function**  
```javascript
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('a1', 30); // 호출할때도 new를 사용한다

// 추가하고싶을때
function Person(name, age) { // obj를 만드는 함수명은 대문자로 시작하여 만든다
this.name = name;
this.age = age;
}

console.log(person4); // { name: 'a1', age: 30 }
```  
   
**5. in operator(해당하는 obj안에 key가 있는지 없는지확인)**  
```javascript
const person1 = { name: 'bob', age: 2 };

console.log('name' in person1); // true
console.log('age' in person1); // true
console.log('random' in person1); // flase
console.log(person1.random); // undefined
```  
  
**6. for..in vs for..of**  
```javascript
// 1) for (ket in obj)
const a1 = { name: 'a1', age: 4 };

a1.hasJob = true;

for (key in a1) {
console.log(key); // name age hasJob
}

// 2) for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
console.log(array[i]); // 1 2 3 4 5
}
// -> 위와같은 형태에서 아래같은 형태로 배열안을 쉽게 알아볼 수 있다!
for (value of array) {
console.log(value); // 1 2 3 4 5
}
```  
  
**7.cloning**  
```javascript
// 1) 배열안의 key와 value를 복사 또는 변경
const user = { name: 'a1', age: '20' };
const user2 = user;
user2.name = 'corder';
console.log(user); // { name: 'corder', age: '20' }

// 2) obj복사(old way)
const user3 = {};
for (key in user) {
user3[key] = user[key];
}
console.log(user3); // { name: 'corder', age: '20' }

// 쉽게1
const user4 = {};
Object.assign(user4, user);
console.log(user4); // { name: 'corder', age: '20' }
// 쉽게2
const user4 = Object.assign({}, user);
console.log(user4); // { name: 'corder', age: '20' }

//ex)
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue -> 아래 편집기 화면처럼 화살표의 방향과 같이(뒤쪽 배열에 선언한) key의 value가 계속 덮어 씌워지게 된다
console.log(mixed.size); // big
```  
![1](https://media.vlpt.us/images/psw0962/post/325b673a-5d0e-43b2-bba7-b4c6a3888f21/image.png)
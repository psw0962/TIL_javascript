**1. Declaration**  
```javascript
const arr1 = new Array();
const arr2 = [1, 2];
```  
  
**2. Index position**  
```javascript
const fruits = ['apple', 'banana'];

console.log(fruits); // [ 'apple', 'banana' ]
console.log(fruits.length); // 2
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // banana 제일 마지막 index를 가져온다
```  
  
**3. Looping over an array**  
```javascript
//a. for
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]); // apple banana
};

//b. for of
for (let fruit of fruits) {
console.log(fruit);
}

//c. forEach
fruits.forEach((fruit) => console.log(fruit)); // apple banana
```  
  
**4. Addtion, deletion, copy**  
```javascript
// 1) push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits); // [ 'apple', 'banana', 'strawberry', 'peach' ]

// 2) pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits); // [ 'apple', 'banana' ]

// 3) unshift: add an item to the benigging
fruits.unshift('strawberry', 'lemon');
console.log(fruits); // [ 'strawberry', 'lemon', 'apple', 'banana' ]

// 4) shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits); // [ 'apple', 'banana' ]

// note!! -> shift, unshift are slower than pop, push!!  
```
![1](https://media.vlpt.us/images/psw0962/post/e5d63a5a-942a-493d-8d0a-acbd087884ef/image.png)  
  
위 그림처럼 pop, push는 새로운 데이터가 뒤에 추가되는 형태라 앞의 인덱스의 구조가 바뀌지 않는다
이 때문에 shift, unshift 보다 빠르다  
![2](https://media.vlpt.us/images/psw0962/post/35d0476a-6265-467c-a4e7-3b72a3d3a90d/image.png)  
 그림처럼 shift, unshift는 새로운 데이터가 앞에 추가되는 형태이기 때문에 뒤에있는 인덱스의 구조가 바뀌게 된다. 이때문에 pop, push보다 느리다(delete할때도 마찬가지) 배열의 길이가 길면 길수록 더!!!  
   
```javascript
// 5) splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits); // [ 'apple', 'banana', 'strawberry', 'peach', 'lemon' ]

fruits.splice(1);
console.log(fruits); // [ 'apple' ] splice는 지정한 인덱스 뒤에 delete count를 입력하지 않으면 그 뒤에 값들은 모두 삭제 한다

fruits.splice(1, 1);
console.log(fruits); // [ 'apple', 'strawberry', 'peach', 'lemon' ]

fruits.splice(1, 1, 'apple', 'watermelon');
console.log(fruits); // [ 'apple', 'apple', 'watermelon', 'peach', 'lemon' ] // delete한자리에 값을 넣을 수 도 있다!

  
// 6) concat: combine two arrays
const fruits = ['apple', 'strawberry'];
const fruits2 = ['papaya', 'banana'];

const newFruits = fruits.concat(fruits2);
console.log(newFruits); // [ 'apple', 'strawberry', 'papaya', 'banana' ]
```  
  
**5. Searching(find the index)**  
```javascript
const fruits = ['apple', 'strawberry', 'papaya', 'banana'];

// 1) indexOf
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('papaya')); // 2
console.log(fruits.indexOf('peach')); // -1 배열안의 없는 값일때는 음수로 출력

// 2) includes
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('peach')); // false

// 3) lastIndexOf
fruits.push('apple');
console.log(fruits.indexOf('apple')); // indexOf는 같은 값이 있을경우 가장 첫번째 출력
console.log(fruits.lastIndexOf('apple'));// lastIndexOf는 같은 값이 있을경우 가장 마지막번째 출력
```  
  
출처: youtube 드림코딩
**// Q1. make a string out of an array**  
```javascript
{
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join();
console.log(result); // apple,banana,orange
}
//-> join(); 은 배열안의 모든 값을 (구분자를 넣을 수 있다) 스트링으로 변환 시킨다

{
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join('|');
console.log(result); // apple|banana|orange
}

{
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(', and ');
console.log(result); // apple, and banana, and orange
}
```  
  
**// Q2. make an array out of a string**
```javascript
{
const fruits = 'apple, kiwi, banana, cherry'
const result = fruits.split(',');
console.log(result); // [ 'apple', ' kiwi', ' banana', ' cherry' ]
}

{
const fruits = 'apple, kiwi, banana, cherry'
const result = fruits.split(',', 2); // 구분자를 반드시 입력해야하고 입력하지 않으면 문자열로 표기된다 또한 remit을 정하여 배열의 두개의 값만 출력도 가능하다
console.log(result); // [ 'apple', ' kiwi' ]
}
```  
  
**// Q3. make this array look like this: [5, 4, 3, 2, 1]**  
```javascript
{
const array = [1, 2, 3, 4, 5];
const result = array.reverse(); // 배열 본래의 값 자체도 변환 시킨다!
console.log(result); // [ 5, 4, 3, 2, 1 ]
}
```  
  
**// Q4. make new array without the first two elements(첫번쨰와 두번째 요소를 제외하고 나머지 3개만 출력)**  
```javascript
{
const array = [1, 2, 3, 4, 5];
const result = array.splice(0, 2);
console.log(result); // [ 1, 2 ]
console.log(array); // [ 3, 4, 5 ]
}
// splice 경우 배열 자체를 바꾸는 것이고 [3, 4, 5] 라느 새로운 배열을 만들어야 하기때문에 splice는 사용할 수 없다

{
const array = [1, 2, 3, 4, 5];
const result = array.slice(2, 5); // 필요한 배열부터 정하고 필요한길이까지보다 +1
console.log(result); // [ 3, 4, 5 ] 필요한 부분만 생성
console.log(array); // [ 1, 2, 3, 4, 5 ] 기존배열은 그대로
}

// 정리: splice는 배열 자체를 수정 / slice는 배열에서 원하는 부분만 리턴해서 받아오고 싶을때
```  
  
**// Q5. find a student with the score 90**  
```javascript
class Student {
constructor(name, age, enrolled, score) {
this.name = name;
this.age = age;
this.enrolled = enrolled;
this.score = score;
}
}

const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

{
const result = students.find((student) => student.score === 90);
console.log(result); // Student { name: 'C', age: 30, enrolled: true, score: 90 }
}
// 정리: find는 콜백함수를 활용하여 배열안의 모든 요소를 확인 후 true값을 찾으면 리턴 후 함수가 종료된다
```  
  
**// Q6. make an array of enrolled students**  
```javascript
class Student {
constructor(name, age, enrolled, score) {
this.name = name;
this.age = age;
this.enrolled = enrolled;
this.score = score;
  }
}

const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

{
const result = students.filter((student) => student.enrolled === true);
console.log(result);
// [
// Student { name: 'A', age: 29, enrolled: true, score: 45 },
// Student { name: 'C', age: 30, enrolled: true, score: 90 },
// Student { name: 'E', age: 18, enrolled: true, score: 88 }
// ]
}
//정리: filter는 원하는 값만 받아와서 출력할 수 있다
```  
  
**// Q7. make an array containing only the students scores**  
```javascript
// result should be: [45, 80, 90, 66 ,88]
{
const result = students.map((student) => student.score * 2); // 함수로 전달되는 인자는 이해하기 쉽게 쓰는 것이 중요하다
console.log(result); // [ 90, 160, 180, 132, 176 ]
}

// 정리: map은 배열안에 있는 요소들을 원하는 함수를 이용해 다른 방식의 데이터를 만들고 싶을때
```  
  
**// Q8. check if there is a student with the score lower than 50**
```javascript
{
const result = students.some((student) => student.score < 50);
console.log(result); // true
// 배열중 하나라도 조건이 만족되면 true

const result2 = students.every((student) => student.score < 50);
console.log(result2); // false
// 모든 배열의 조건이 맞아야 true
}

//정리: 배열중에 어떤것이라도 하나 만족되는것이 있는지 확인할때 some / 모든배열의 조건이 만족해야할때 every
```  
  
**// Q9. compute students average score(평균점수 구하기)**  
```javascript
{
const result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result / students.length);
// 0
// Student { name: 'A', age: 29, enrolled: true, score: 45 }
// -----------
// 45
// Student { name: 'B', age: 28, enrolled: false, score: 80 }
// -----------
// 125
// Student { name: 'C', age: 30, enrolled: true, score: 90 }
// -----------
// 215
// Student { name: 'D', age: 40, enrolled: false, score: 66 }
// -----------
// 281
// Student { name: 'E', age: 18, enrolled: true, score: 88 }

// 369
}

// 평균값 구하기
{
const result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result / students.length); // 총값 / 전체학생수 73.8
}

// 정리: reduce는 원하는 시작점부터 모든 배열을 돌면서 값을 누적할때 쓴다
```  
  
**// Q10. make a string containing all the scores(모든 점수를 스트링으로 변환)**  
```javascript
// result should be: `45, 80, 90, 66, 88'

{
const result = students
.map((student) => student.score)
.join();
console.log(result); // 45,80,90,66,88
}

{
const result = students
.map((student) => student.score)
.filter(score => score >= 50)
.join();
console.log(result); // 80,90,66,88
}
// 이처럼 묶어서도 사용이 가능하다!
```  
  
**// Bonus! do Q10 sorted in ascending order(낮은 점수부터 정렬)**  
```javascript
// result should be: `45, 66, 80, 88, 90'
{
const result = students
.map(student => student.score)
.sort((a, b) => a - b)
.join();
console.log(result); // 45,66,80,88,90
}

{
const result = students
.map(student => student.score)
.sort((a, b) => b - a) // 받아지는 값을 변경하여 높은점수부터 정렬도 가능하다
.join();
console.log(result); // 90,88,80,66,45
}
```  
  
출처: youtube 드림코딩
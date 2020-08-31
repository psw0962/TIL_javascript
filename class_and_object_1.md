**1. class와 object 개념정리(feat.붕어빵)**  
1) class  
![1](https://media.vlpt.us/images/psw0962/post/28ce459b-d609-487d-bdc5-7ba0e8c131cd/image.png)  
위 사진처럼 class는 붕어빵을 만들 수 있는 '틀을' 말한다(이 때문에 template라고도 표현하고 한번만 선언함)  
  
2) object  
![2](https://media.vlpt.us/images/psw0962/post/d00b8c08-550c-4ae7-be43-1b8a2f9a1bc7/image.png)  
위 사진처럼 class를 이용해서 데이터를 만드는 것이 object이다
그래서 이 object에 팥 데이터를 넣으면 팥붕어빵, 크림 데이터를 넣으면 크림붕어빵이 된다!  
  
정리)이렇게 만들어진 붕어빵자체는 object이고 이 붕어빵을 만들기 위해 정의한 틀은class가 되는 것이다!  
  
**2. Class and object**  
```javascript
// class  
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

speak() {
    console.log(`${this.name}: hello!`);
}
}

// object
const a1 = new Person('a1', 20);
console.log(a1.name); // a1
console.log(a1.age); // 20
a1.speak(); // a1: hello!
```  
  
**3. Getter and Setters**  
```javascript
class User {
constructor(firstName, lastName, age) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
}

get age() {
    return this._age;
} // get 이라는 키워드를 통해 값을 리턴하고

set age(value) {
    this._age = value < 0 ? 0 : value;
} // set 이라는 키워드를 통해 값을 설정할 수 있다
}

const user1 = new User('Steve', 'Job', -1); // 사람의 나이는 -1이 될 수 없다. 이처럼 사용될 수 없는 값을 설정해도 최대한 방어적인 자세로 만들 수 있게 해주는것이 getter 와 setter이다!

console.log(user1.age); // -1로 설정하여도 0으로 출력하게 된다!
```  
**// 정리) 커피자판기머신예시**  
  
**4. Fields(public, private) // 최신문법이라 babel을 사용해야함**  
```javascript
class Experiment {
publicField = 2; // 외부에서 접근 가능
#privateField = 0; // 클래스 내부에서만 접근가능
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined
```  
  
**5. Static properties and methods**  
```javascript
class Article {
static publisher = 'a1';
constructor(articleNumber) {
this.articleNumber = articleNumber;
}

static printPublisher() {
    console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article1 = new Article(2);
console.log(article1.publisher); // undefined
// -> object안에 publisher는 값이 지정되지 않았다
// -> static은 object마다 할당되어 지는것이 아니라 class 자체에 붙어있게된다.

// 이와같은 이유 때문에
// -> console.log(Article.publisher); // class자체로 변경하면 a1을 정상적으로 출력한다
// -> Article.printPublisher();로 출력해도 가능하다!

// 정리) object에 상관없이(들어오는 데이터에 상관없이) 공통적으로 클래스에서 쓸 수 있다면 static과 static 메소드에서 작성하는 것이 메모리에 사용을 조금 더 줄여줄 수 있다
```  
  
**6. 상속 & 다양성**  
```javascript 
class Shape {
constructor(width, heigth, color) {
this.width = width;
this.heigth = heigth;
this.color = color;
}

draw() {
    console.log(`drawing ${this.color} color of`) // 전체적인 수정이 필요할때 이부분만 수정하면 전체적으로 다 반영이된다.(상속하여 쓰는 이유!!!!)
}

getArea() {
    return this.width * this.heigth;
    }
}

class Rectangle extends Shape { } // 위의 Shape class를 Rectangle안에 상속하여 쓸 수 있다

class Triangle extends Shape {
getArea() {
return (this.width * this.heigth) / 2; // 단순히 상속뿐아니라 필요한 부분을 수정하여 사용할 수 도 있다!
}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of
console.log(triangle.getArea()); // 200
```  
  
**7. instanceOf(Class checking instanceOf)**  
```javascript
class Shape {
constructor(width, heigth, color) {
this.width = width;
this.heigth = heigth;
this.color = color;
}

draw() {
    console.log(`drawing ${this.color} color of`)
}

getArea() {
    return this.width * this.heigth;
}
}

class Rectangle extends Shape { }
class Triangle extends Shape {
getArea() {
return (this.width * this.heigth) / 2;
}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
//-> 왼쪽에있는 object가 오른쪽에 클래스의 인스턴스인지 아닌지 확인하는 것!(true/false)
```  
  
출처:youtube 드림코딩
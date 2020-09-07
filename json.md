**1. HTTP**  
브라우저위에서 동작하고있는 웹 사이트나 웹 어플리케이션과 같은 클라이언트들이 어떻게 서버와 통신할 수 있는지를 정의한 것이 HTTP 이다  
어떻게 Hypertext를 서로 주고받을 수 있는지를 규약한 프로토콜의 하나이다  
HTTP는 클라이언트가 서버에게 데이터를 요청할 수 있고 서버는 클라이언트가 요청한 것에 따라서 응답을 클라이언트에 보내주는 방식으로 진행되는 것을 의미한다  
  
![1](https://media.vlpt.us/images/psw0962/post/57167267-7cc8-48b4-abc4-c0bfecfb12f9/image.png)  
  
여기서 Hypertext는 웹사이트에서 이용하고있는 하이퍼링크뿐아니라 전반적으로 쓰여지고 있는 문서나 이미지파일들을 다 포함해서 말한다  
  
**2. XML and JSON**  
요청하고 응답하는 방법으로는 AJAX(Asynchronous Javascript And XML)를 사용한다  
웹페이지에서 동적으로 서버에게 데이터를 주고 받을 수 있는 기술을 의미하는데 대표적인 예로는 XHR(XML Http Request) 오브젝트가 있다  
이는 브라우저 API에서 제공하는 오브젝트중에 하나로 이를 이용하면 간단하게 서버에서 데이터를 요청하고 받아올 수 있다  
AJAX(Asynchronous Javascript And XML)와 XHR(XML Http Request)에 중복적으로 보이는 것이 XML인데 XML은 HTML과  
같은 마크업 언어중 하나이다. 그렇다면 XML만 가능하다고 생각할 수 있다  
하지만 서버와 데이터를 주고받을때에는 굉장히 다양한 파일포맷을 전달받을 수 있다. 최근에는 JSON을많이 쓰고있다  
  
서버와 클라이언트가 통신하는 방법으로는  
fetch() API  
XHR(XML HTTP Request)  
XML을 사용하게되면 불필요한 태그가 너무 많이 들어가서 파일의 사이즈도 커지고 가독성도 좋지 않기 때문에 많이 사용하고있지 않고 JSON을 많이 사용하고 있다  
  
**3. JSON**  
1) 데이터를 주고받을때 쓸수있는 가장 간단한 파일포맷이다  
2) 텍스트를 기반으로하여 가장가볍고  
3) 사람이 읽기 또한 편하다  
4) key와value로 이루어져있고  
5) 데이터를 서버와 주고받을때 직렬화하여 주고받는다  
6) 프래그래밍 언어나 플랫폼에 상관없이 쓸 수 있다  
7) JSON(javascript Object Notation)은 ES3 버전에서 쓰여지는 object에서 큰 영감을 받아 만들어진 데이터 포맷이다. // object{ key : value } 로 이루어진 형태를 말한다  
8) json은 브라우저뿐 아니라 모바일에서 데이터와 서버를 주고받을때, 또는 서버와 통신하지 않아도 object를 파일 시스템에 저장할때도 많이 이용한다  
  
**코드를 통해 알아보자!**  
```javascript
// 1. Object to JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]

const rabbit = {
name: 'tori',
color: 'white',
size: null,
birthDate: new Date(),
jump: () => {                               //여기서 만들어진 함수는string형태로 전달되기 때문에 기능하지 못한다
console.log(${name} can jump!);
},
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2020-09-06T12:56:33.949Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); // {"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
console.log(key: ${key}, value: ${value});
return key === 'name' ? 'nick' : value; // key가 name이면 이름을 nick으로 바꾸고 key가 name 이 아니면 value를 출력
});
console.log(json);
//key: , value: [object Object]
//key: name, value: tori
//key: color, value: white
//key: size, value: null
//key: birthDate, value: 2020-09-06T13:03:47.489Z
//{"name":"nick","color":"white","size":null,"birthDate":"2020-09-06T13:03:47.489Z"}
// -> 콜백함수를 통해 더 세세하게 통제할 수 있다
// stringify로 변환할때 함수기능은 인식하지 못하고
// 변환되기 때문에 parse할때도 없는 기능이다 이점을 유의해서 코딩해야한다

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj); // {"name":"nick","color":"white","size":null,"birthDate":"2020-09-06T13:17:55.506Z"}

console.log(rabbit.birthDate.getDate()); // 6

console.log(obj.birthDate.getDate()); // 에러
// -> 이유: 위에서 new Date();로 출력한 날짜가 stringify 되었기 때문에 출력하지 못함
// 이를 출력하기 위해서는 아래와 같이할 수 있다

const obj = JSON.parse(json, (key, value) => {
console.log(key: ${key}, value: ${value});
return key === 'birthDate' ? new Date(value) : value; // parse하는 과정에서 날짜를 받아오게 조건을 줘야가져올 수 있다
});
console.log(obj.birthDate.getDate()); // 6

// 총정리:
// JSON(JavaScript Object Notation)이란 데이터를 저장하거나 전송할때 사용되는 DATA 교환형식
// JSON은 사람과 기계 모두 이해하기 쉬우며 용량이 작아서, 최근에는 JSON이 XML을 대체해서 데이터 전송 등에 많이 사용한다
// JSON 문서 형식은 자바스크립트 객체의 형식을 기반으로 만들어졌다
// 특정 언어나 플랫폼에 제한되지 않고 대부분의 프로그래밍 언어에서 JSON 포맷의 데이터를 사용할 수 있는 라이브러리를 제공한다
// key값이나 문자열은 항상 쌍따옴표를 이용하여 표기해야한다
// JSON형식에서는 null, number, string, array, object, boolean을 사용할 수 있다
// 콜백함수를 전달하여 세밀하게 통제할 수 있다
// JSON에는 stringify와 parse가 있다
// JSON.parse( JSON으로 변환할 문자열 ) : JSON 형식의 텍스트를 자바스크립트 객체로 변환한다
// JSON.stringify( JSON 문자열로 변환할 값 ) : 자바스크립트 객체를 JSON 텍스트로 변환한다

// JSON관련 유용한 사이트
// JSON Diff
// JSON Beautifier
// JSON Parser
// JSON Validator
```
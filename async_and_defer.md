script 태그를 head 태그에 넣을 경우
parsing HTML -> fetching js / executing js -> parsing HTML
-> 단점 : 만약 이 js파일의 용량이 크고 인터넷이 느리다면 사용자가 페이지를 보기까지 시간이 너무 오래걸림
![1](https://media.vlpt.us/images/psw0962/post/c26afd13-4ac3-48c3-8bd4-ebafd83c96f9/1.png)

body 태그에 script 태그를 넣는 경우
parsing HTML (page is ready!)-> fetching js / exeuting js
-> 단점: 사용자가 기본적인 HTML의 컨텐츠를 본다는 장점은 있다.
하지만 웹 사이트가 js파일에 굉장히 의존적이라면 즉, 사용자가 의미있는 컨텐츠를 보기 위해서
자바스크립트를 이용해서 서버에있는 데이터를 받아온다던지, DOM요소를 더 꾸며준다던지 동작하는 웹 사이트라면
js파일을 서버에서 받아오는 시간도 기다려야하고 실행하는 시간까지 기다려야함
![2](https://media.vlpt.us/images/psw0962/post/d55c352b-c0ff-4872-b45f-527e2d5a5bd0/2.png)

head + async
head 태그안에 async 와 함께 script 태그를 넣는 경우 ex)
parsing HTML 진행중 (asyn발견시) -> fetching js 시작 -> 다운로드 완료시 -> js파일 실행
다시 parsing HTML 진행
body태그에 script를 넣는 것 보다 parsing HTML과 fetching js를 병렬적으로 진행하기 때문에 시간을 절약할 수 있다
그러나 parsing HTML이 완성되기 전에 js파일이 실행까지 완료 된다면 원하는 요소가 아직 정의되지 않을 수 있기 때문에 위험
![3](https://media.vlpt.us/images/psw0962/post/97d44422-4bee-44a6-93d9-0f0f721e20d4/image.png)

head + defer
head 태그안에 defer 와 함께 script 태그를 넣는 경우 ex)
parsing HTML -> defer발견시 js파일 다운로드 시작 -> parsing HTML 완료 후 -> js파일 실행
![4](https://media.vlpt.us/images/psw0962/post/0978371c-54ef-4aed-8da7-bc1b94ad5e7a/image.png)

async 사용의 단점
만약 이 경우 여러 a, b, c js 파일이 다운되는 속도가 다 다르고 실행 되는 순서도 다 달라지기 때문에 문제가 될 수 있다.(원하는 순서대로 실행 불가)
또한 fetching 과 executing이 진행되는 동안 parsing은 멈춰지게 됨
![5](https://media.vlpt.us/images/psw0962/post/c6e41282-d6f3-4c29-8496-b49bf237d22f/image.png)

defer 사용의 경우
이와 같은 경우 defer은 parsing HTML을 진행하면서 js파일을 다운로드만 받은 후 parsing HTML이 완료가 되면 js파일을 순서대로 실행하기 때문에
head + defer 옵션을 사용하는것이 제일 효율적이다.
![6](https://media.vlpt.us/images/psw0962/post/b3aa10bc-3460-4fea-b7d2-fcf29c529787/image.png)

'use strict';
javascript는 굉장히 유연한 언어이다. 때문에 다른언어와는 달리
선언되지않은 변수에 값을 할당한다거나 기존에 존재하는 프로토타입을 변경한다거나 할 수 있다
때문에 개발자가 많은 실수를 할 수 있다
하지만 ECMAScript5에 추가된 'use strict';을 맨 상단에 선언하게되면 이런일을 방지할 수 있다
또한 javasciprt 엔진이 효율적으로 분석할 수 있기에 실행하는데 있어서도 성능개선을 기대할 수 있다

*이미지출처:드림코딩(youtube)
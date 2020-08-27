자바스크립트 역사
1993년 컴퓨터를 잘 모르는 사람들도 쉽게 쓸 수 있는 UI 요소가 더 해진 첫번째
Mosaic Web Browser가 세상에 나옴
이 개발 팀을 이끌던 Marc Andreeessen은 대학 졸업과 동시에 Netscape 회사설립
이 후 UI 요소가 더 해진 Netscape Navigator를 시장에 내놓는다
페이지와 페이지 사이의 이동만 가능 했지만 시장에서 80%점유율 확보 후 급격히 성장
DOM 요소들을 조작하면서 다이나믹한 동적인 웹 사이트를 어떻게 만들 수 있을까 고민끝에 Scripting 언어를 추가하자 생각함
그리하여 Brendan Eich와 함께새로운 언어를 추가하기로 생각하여 기존에 있던 Scheme Scripting 언어를 바탕으로 문법은 Java스럽게 만들어 10일만에 내부적으로는 Mocha라고 불리우는 언어로 출시되었고 Live Script로 이름이 바뀌고 Netscape Navigator안에 Live Script 언어를 이해할 수 있는 Live Script interpreter이 포함되어 출시되면서 이제 웹 개발자들이 Live Script 언어를 이용해서 웹페이지를 만들게 되면 Netscape Navigator 브라우저가 그 언어를 이해하면서 그 언어가 실행하고자 하는 요소에 알맞게 DOM 요소들을 조작할 수 있게 가능해진 것이다
이 후 그 당시 Java 언어의 인기가 치솟던 중이라 이를 따라 언어의 이름을 JavaScript로 변경
이 후 JavaScript언어를 이해할 수 있는 JavaScript interpreter 가 있는 Netscape Navigator브라우저가 출시된다

이것을 본 마이크로소프트사에서 이와 같은 언어와 internet explore를 출시하면서
개발자들에게는 혼동이 오기 시작한다(다른 언어와 이해할 수 있는 브라우저가 다르기 때문)
1996년 11월 이와같은 혼동을 없애기 위해 Netscape사에서 ECMA international이라는 단체 에 찾아가 언어의 표준을 정의하자고 함
1997년 7월 ECMAScript 의 첫 표준이 나오게되고 이후 추가적으로 버전들이 나옴
이때 마이크로 소프트사의 internet explore의 점유율이 95%가량 올라감
이렇게 되면서 여러가지 불만들을 표출하기 시작하고 ECMA 표준에 참석하지 않게 되면서 버전의 업데이트가 더뎌 지게됨
그리하여 다양한 브러우저에 맞게 개발을해야했던 개발자들의 고충이 있었다
이 후 2004년 Jesse James Garrett라는 사람이 AJAX라는 기술을 가지고 나온다
이는 비동기적으로 데이터를 서버에서 받아오고 처리할 수 있도록 도와주는 기술 이었고 Jquery, dojo, mootools 와 같은 라이브러리들이 나오면서 이들의 APIS만 사용하면 브라우저에 상관없이 개발을 할 수 있게된다
그 중 write less, do more. 이라고 강조하는 Jquery가 굉장히 많은 사랑을 받게됨
이 후 2008년 google 에서 JIT(just-in-time compilation)이라는 강력한 엔진이 담긴 Chrome 브라우저를 출시함
이는 Javascipt를 실행하는 속도가 굉장히 빠른 엔진이 포함된 브라우저 였다
이를 본 다른 브라우저들도 성능 개선을 위해 생산적인 대화를 하게됨 (2008,07)
표준화를 만들어보자고 이야기를 다시 시작하여 ECMA Script5 가 나오고
우리가 현재 많이 쓰고있는 함수가 있는 (const, let, arrow function 등)
ECMA Script6 가 나오게 되고 매년 새로운 버전이 나왔지만 6버전이 제일 많은 변화를 보였다
이를 통해 우리가 알 수 있는것은 Javascript 언어가 이제는 많이 성장하고 정착된 언어라는 것을 알 수 있다
또한 브라우저들이 표준언어를 잘 따라가고 있다보니 이전에 사용했던
Jquery, dojo, mootools 같은 라이브러리들의 도움없이도 Javascript와 웹 APIs에서 제공하는 웹 APIs들 만으로도 충분히 개발이 가능해졌다(모든 브라우저에서 동작하는) 각 브라우저들 마다 ECMA의 표준안을 따라가는 다양한 엔진이 있다
이 중 chrome에서 쓰고있는 V8엔진은 node js와 electron에서도 이용되어 진다
시장에서 다양한 사용자들은 다양한 브라우저를 사용하고있고 모두가 최신 문법을 사용하고 있는것은 아니다
그래서 개발을할때에는 최신문법을 사용하고 배포를할때는 Babel 라는 Javascript transcompiler 를 활용해 버전을 낮춰서 배포하는 경우 발생하게 된다

현재의 상황
SPA(Single Page Application)이 활성화 되고있다
단순한 웹사이트를 만드는 것을 넘어서 하나의 페이지안에서 데이터를 받아 필요한 부분만 업데이트하는것이 유행함
이를 조금 더 쉽게 만들기 위해 React, vue.js, Angular 등 라이브러리가 나오게됨
또한 ECMA의 표준화와 V8의 강력한 엔진으로 node js를 통해 back-end에서 서비스를 구현할 수도 있게됨
이 외에도 여러 라이브러리들을 통해 모바일 App 이나 deskktop App 또한 만들 수 있게되어 Javascipt의 활용도가 무궁무진해 졌다


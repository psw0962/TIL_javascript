이재익님의 벨로그 글 중에서

**1. REST는 어떤 의미일까?**

REST는 Representational State Transfer의 약자이다.  
자원을 URI로 표시하고 자원의 상태를 주고 받는 것을 의미한다.

REST의 구성 요소

1. 자원(Resource): URI
2. 행위(Verb): HTTP METHOD
3. 표현(Representations)

즉 Rest는 URI를 통해 자원을 표시하고, HTTP METHO를 이용하여 해당자원의 행위를 정해주며 그 결과를 받는 것을 말한다.

**2. REST 특징**

1)Uniform Interface (유니폼 인터페이스)
HTTP 표준만 따른다면 어떤 언어 혹은 어떤 플랫폼에서 사용하여도 사용이 가능한 인터페이스 스타일이다.
안드로이드 플랫폼, IOS 플랫폼 등 특정 언어나 플랫폼에 종속되지 않고 사용이 가능하다.

2)Stateless (상태 정보 유지 안함)
Rest는 상태 정보를 유지하지 않는다.
서버는 각각의 요청을 완전히 다른 것으로 인식하고 처리를 한다.
이전 요청이 다음 요청 처리에 연관이 되면 안된다.

3)Cacheable (캐시 가능)
HTTP의 기존 웹 표준을 그대로 사용하기 때문에 HTTP가 가진 캐싱 기능 적용이 가능하다.
Self-descriptiveness (자체 표현 구조)
Rest API 메시지만 보고도 쉽게 이해할 수 있는 자체 표현 구조로 되어있다.

4)Client-Server
Rest 서버는 API 제공을 하고 클라이언트는 사용자 인증에 관련된 일들을 직접 관리한다.
자원이 있는 쪽을 Server라고 하고 자원을 요청하는 쪽이 Client가 된다.
서로간의 의존성이 줄어들기 때문에 역할이 확실하게 구분되어 개발해야할 내용들이 명확해진다.

5)Layerd System (계층화)
클라이언트는 Rest API 서버만 호출한다.
Rest 서버는 다중 계층으로 구성될수 있으면 로드 밸런싱, 암호화, 사용자 인증 등을 추가하여 구조상의
유연성을 둘 수 있다.

이를 기반으로 규칙들을 지켜서 설계된 API를 Rest API 혹은 Restful API 라고 한다.

REST를 REST답게 쓰기 위한 방법이지만 누군가가 공식적으로 발표한 것이아니고 그저 개발자들이 비공식적으로 의견을 제시한 것이라 명확한 정의는 없다고 한다. 하지만 RESTFUL의 목적은 이해하기 쉽고 사용하기 쉬운 REST API를 만드는 것이다.

**4. REST API 설계 규칙**
1)URI는 정보의 자원을 표현해야한다.
자원의 이름은 동사보다는 명사를 사용한다.
URI는 자원을 표현하는데 중점을 두어야 하기 때문에 행위에 대한 표현이 들어가면 안된다.
(URI에 HTTP METHOD와 행위에대한 동사 표현이 들어가면 안된다.)

```
GET /users/321
```

2)자원에 대한 행위는 HTTP METHOD로 표현한다. (GET, POST, PUT DELETE)
URI에 자원의 행위에 대한 표현이 들어가지 않는 대신 HTTP METHOD를 통해 대신한다.

```
GET /users/321 321 ID를 가진 유저 정보를 가져오기
DELETE /users/321 321 ID를 가진 유저 정보를 삭제하기
POST /users 유저를 생성하기
```

3)슬래시 (/)는 계층 관계를 나타내는데 사용한다.

```
http://restapi.test.com/users/rooms
http://restapi.test.com/users/board
```

4)URI 마지막은 슬래시(/)를 사용하면 안된다.

```
http://restapi.test.com/users/rooms/ [X]
http://restapi.test.com/users/rooms  [O]
```

5)하이픈 (-)은 URI의 가독성을 높이는데 사용한다.
불가피하게 긴 URI를 사용하게 될 경우 하이픈을 이용하여 가독성을 높인다.

6)언더바(\_) 혹은 밑줄은 URI에 사용하지 않는다.
밑줄은 보기 어렵거나 밑줄 때문에 문자가 가려지기도 한다.
그래서 대신 언더바를 사용하지 않고 하이픈을 이용한다.

7)URI는 경로에는 소문자가 적합하다.
URI 경로에는 대문자 사용을 피해야한다.
대소문자에 따라 각자 다른 리소스로 인식하기 때문이다.
RFC3986(URI 문법 형식)은 URI 스키마와 호스트를 제외하고는 대소문자를 구별하도록 규정하기 때문이다.

8)파일 확장자는 URI에 포함하지 않는다.
REST API에서는 메시지 바디 내용의 포맷을 나타내기 위한 파일 확장자를 URI 안에 포함시키지 않는다.
Accept header를 사용한다.

9)리소스 간의 관계를 표현하는 방법

```
GET : /users/{userid}/devices
```

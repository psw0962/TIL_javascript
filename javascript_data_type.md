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



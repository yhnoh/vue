Vue Router
- 컴포넌트와 페이지 주소를 연결하는 패키지

### axios
- 통신라이브러리
- async await 키워드를 통해서 비동기 방식으로 데이터를 전달받을 수 있다.

### 데이터 전달
- 상위 컴포넌트가 하위 컴포넌트에게 데이터를 전달할때는 Props
- 특정한 컴포넌트를 거치지 않고 데이터를 전달하는 Provide/ inject
- VueX 중앙 집중식 상태관리 라이브러리, 스토어라고 많이들 부른다.
  - 상하위 컴포넌트를 거쳐가며 데이터를 전달하는 방식은 컴포넌트가 점점 많아지면서 복잡해질 수 밖에 없다.
  - 때문에 중앙에 데이터를 저장하고, 해당 데이터를 각 컴포넌트들이 데이터를 전달받을 수 있다.
    - Store라는 매개체만 넘겨받으면 되기때문에 좀 더 쉽게 데이터를 사용할 수 있다.

### index 키워드
- 폴더에서 가장 기본적으로 사용하는 파일을 만드려면 index라는 파일명으로 만드는 것이 좋다.
- java의 stream을 사용하는것과 비슷하지만, 성능 측면에서도 나쁘지 않다.

### Lodash
> https://lodash.com/
- JavaScript내의 객체 정보를 쉽게 핸들링할 수 있도록 도와주는 라이브러리

### promise, aysnc, await
- 콜백함수를 사용할 경우 내가 작성한 로직을 지연시킬 수 있지만, 콜백함수를 많이 사용할 수 록 보기 힘들어지는 코드가 될 수 있다.
```javascript
// a, b, c, d를 순서대로 출력함
function a(callback){
  console.log('a');
  callback();
}

function b(callback){
  console.log('b');
  callback();
}

function c(callback){
  console.log('c');
  callback();
}

function d(callback){
  console.log('d');
  callback();
}

a(function () {
    b(function (){
        c(function (){
            d(function (){
                console.log('done')
            })
        })
    })
})
```
- Promise 객체를 통해서 순서를 보장해줄 수 있다.
  - async, await 키워드를 활용할 수 없을경우 유용하게 사용할 수 있다.

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

```javascript
function a() {
  var promise = Promise.resolve();
  promise.then();
  return new Promise(function (resolve) {
    console.log('a');
    resolve('a');
  })
}
```

# hello-world

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

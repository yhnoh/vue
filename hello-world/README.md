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
- 

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

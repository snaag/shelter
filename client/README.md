# How to start CLIENT

## Start React app

```
npm start
```

## Google Map API 사용하는 방법

1. `src` 폴더 아래에 `config` 폴더를 추가해 주세요

2. config 폴더 안에 `apiKey.js` 파일을 만들어주세요

3. `apiKey.js` 파일에 아래의 내용을 작성해주세요

```javascript
module.exports = {
  googleMap: "각자 발급받은 Google Map API Key"
};

// 사용 시, import { name } from "현재 파일에서 apiKey를 찾는 경로" 로 사용하시면 됩니다.
// 예시: import { googleMap } from "../../config/apiKey"; - Map.js
```

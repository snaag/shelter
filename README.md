
# Shelter
![react](https://img.shields.io/badge/react-16.13.1-brightgreen)
![react-router-dom](https://img.shields.io/badge/react--router--dom-5.2.0-brightgreen)
![react-redux](https://img.shields.io/badge/react--redux-7.2.0-brightgreen)
![react-google-maps](https://img.shields.io/badge/react--google--maps-9.4.5-brightgreen)
![axios](https://img.shields.io/badge/axios-0.19.2-brightgreen)
![express](https://img.shields.io/badge/express-4.17.1-blue)
![body-parser](https://img.shields.io/badge/body--parser-1.19.0-blue)
![cookie-parser](https://img.shields.io/badge/cookie--parser-1.4.5-blue)
![cors](https://img.shields.io/badge/cors-2.8.5-blue)
![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-8.5.1-blue)
![mysql2](https://img.shields.io/badge/mysql2-2.1.0-blue)
![sequelize](https://img.shields.io/badge/sequelize-6.2.3-blue)

## 프로젝트 개요
### 프로젝트 명
Shelter

### 팀원
**박정혁**, 변민우, 이상아, 함석호

### 기간
2020.06.29 - 2020.07.11

### 요약
쉘터는 경기도에 있는 청소년 쉼터들의 정보를 보다 빠르고 쉽게 검색할 수 있도록 도와주는 웹 어플리케이션 입니다.

쉼터들의 위치를 지도에 표시해주고 각 쉼터에 대한 정보를 한 눈에 확인 할 수 있습니다.


## 팀원 소개
### 박정혁 *Front-end*
- client 개발 환경 및 프레임 구축
- `Filter` 컴포넌트 기능 구현
- `Filter`, `Map` 컴포넌트 연결
- 반응형 웹 디자인 설정
  
### 변민우 *Full Stack*
- server 개발환경 및 프레임 구축
- map API 구현
- user API 구현
- `sign-up`, `sign-in`, `sing-out` 페이지 구현
- dabatabase 개발 환경 및 테이블 구축

### 이상아 *Front-end*
- client 개발 환경 및 프레임 구축
- `Map` 컴포넌트 기능 구현
- `Chat` 컴포넌트 기능 구현 *(wip)*
 
### 함석호 *Back-end*
- server 개발 환경 및 프레임구축
- shelter API 구현
- chat API 구현 (wip)


## 기술 스택
![image (1)](https://user-images.githubusercontent.com/35102081/87292744-3a987100-c53c-11ea-8068-b3ed33c0e7bf.png)

[React JS](http://reactjs.org/)

[Redux](https://redux.js.org/)

[GoogleMaps](https://developers.google.com/maps/documentation?hl=ko)

[Node](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[AWS](https://aws.amazon.com/ko/)



## 기능
### 청소년 쉼터 검색
선택한 조건에 맞는 쉼터 목록을 조회합니다.

![검색](https://user-images.githubusercontent.com/35102081/87310759-5c542100-c559-11ea-81ae-9f686a824b1d.gif)

### 상세 정보 확인
원하는 쉼터의 상세 정보와 위치를 조회합니다.

![상세정보확인](https://user-images.githubusercontent.com/35102081/87310884-873e7500-c559-11ea-97ce-5079b48d765b.gif)

### 검색 결과 없음
선택한 조건에 맞는 쉼터가 없을 땐 빈 목록을 보여줍니다.

![검색결과 없음](https://user-images.githubusercontent.com/35102081/87311124-cd93d400-c559-11ea-8ca8-b90155ad30f4.gif)

### 전체 검색
필터의 어떤 키워드도 선택하지 않고 검색했을 시, 모든 쉼터를 조회합니다.

![전체 검색](https://user-images.githubusercontent.com/35102081/87311110-ca98e380-c559-11ea-81ee-9b223119e861.gif)

### 회원 가입
우측 하단의 Floating Action Button을 클릭하여 회원 관리 페이저로 이동합니다.

회원은 쉼터 직원(관리자)과 청소년 두 유형으로 분리하여 관리합니다.
<p>
<img src="https://user-images.githubusercontent.com/35102081/87311707-8fe37b00-c55a-11ea-888e-e754cec7ab76.gif" alt="관리자 가입" width="48%" />
<img src="https://user-images.githubusercontent.com/35102081/87311713-9245d500-c55a-11ea-9014-84b07f366d6d.gif" alt="청소년 가입" width="48%" />
</p>

### 로그인 / 로그아웃
회원 관리 페이지에서 로그인을 할 수 있으며 로그인 상태일 때 Floating Action Button을 클릭하면 로그아웃이 됩니다.
<p>
<img src="https://user-images.githubusercontent.com/35102081/87311721-93770200-c55a-11ea-9aa8-21e413d1d75a.gif" alt="로그인" width="48%" />
<img src="https://user-images.githubusercontent.com/35102081/87311726-9540c580-c55a-11ea-8c41-3254744566c8.gif" alt="로그아웃" width="48%" />
</p>

### 모바일 검색
모바일 환경에서의 검색 기능입니다.

![모바일 검색](https://user-images.githubusercontent.com/35102081/87311749-9d990080-c55a-11ea-8f60-845307e248f4.gif)

### 모바일 상세 정보 확인
모바일 환경에서 쉼터의 상세 정보를 확인합니다.

하단의 버튼을 통해 목록과 지도를 번갈아 조회할 수 있습니다.

![모바일 상세 정보 확인](https://user-images.githubusercontent.com/35102081/87311757-9f62c400-c55a-11ea-99b0-b787334a57c6.gif)

### 모바일 로그인 / 로그아웃
모바일 환경에서의 로그인, 로그아웃 기능입니다.

![모바일 로그인 로그아웃](https://user-images.githubusercontent.com/35102081/87311765-a12c8780-c55a-11ea-9055-d09990bd1c66.gif)

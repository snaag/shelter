## Server Readme

### Database

- "shelter_db_dev" || "shelter_db_prod" 라는 데이터베이스를 생성 하셔야 합니다.

  - Engine 은 mysql 사용했고 유저는 root으로 설정 되어 있습니다.
  - ```
    mysql -uroot -p[패스워드]
    mysql > create database shelter_db_dev
    ```

- 아래 환경 변수를 지정해주세요.

  - export DB_PASSWORD='your password'
  - export API_KEY_GOV='your Youth Shelter API key'
  - export SVS='your svs'

- Production ONLY
  - export NODE_ENV=production
  - export DB_USERNAME='production DB_USERNAME'
  - export DB_HOST='production DB_HOST'
  - export DB_PORT = 'production DB_PORT (type INT)'

* 아래 sequelize-cli 커맨드를 실행 시켜주세요.

  - ```
    npx sequelize-cli db:migrate
    ```

* Migration 에 오류가 생긴 경우 아래와 같이 아래 명령어를 실행 시켜주세요.

  - ```
    npx sequelize-cli db:migrate:undo:all
    ```

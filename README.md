```bash
## Installation
$ yarn

## Running the app
# development mode
$ npm run start:dev
# staging mode
$ npm run start:staging
# production mode
$ npm run start:prod

## Dockerfile build and deploy production
$ docker build -f Dockerfile.prod -t mrafro/fibonacci-sequence-service .
$ docker push mrafro/fibonacci-sequence-service
$ docker pull mrafro/fibonacci-sequence-service
$ docker run --name fibonacci-sequence-service -p 8000:8000 mrafro/fibonacci-sequence-service

## Run docker compose development mode
$ docker-compose -f docker-compose.dev.yml up --build

## Run docker compose staging mode
$ docker-compose -f docker-compose.staging.yml up --build

## Run docker compose production mode
$ docker-compose -f docker-compose.prod.yml up --build
```

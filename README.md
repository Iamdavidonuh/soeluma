
# Sõeluma

[![Actions Status](https://github.com/Iamdavidonuh/soeluma/workflows/Soeluma%20Test/badge.svg)](https://github.com/Iamdavidonuh/soeluma/actions)
[![Actions Status](https://github.com/Iamdavidonuh/soeluma/workflows/Deploy%20to%20Heroku/badge.svg)](https://github.com/Iamdavidonuh/soeluma/actions)
![Deploy to Github Package](https://github.com/Iamdavidonuh/soeluma/workflows/Deploy%20to%20Github%20Package/badge.svg)

Estonian for parse, is a node js application for parsing and returning movie ratings data

# Table of contents

1. [Requirements](#Requirements)
2. [Installation](#Installation)
3. [Available Scripts](#Available%20Scripts)
4. [Alternative](#Alternatively)
5. [Deployment](#Deployment)
6. [Licence](#Licence)

## Requirements

- Node (v12^)

    To install node, checkout [node documentation](https://nodejs.org/en/download/package-manager/), personally i prefer the [nvm section](https://nodejs.org/en/download/package-manager/#nvm)

- Mongodb

    Checkout the mongodb [docs](https://docs.mongodb.com/manual/installation/)

- Redis

    `sudo apt update && sudo apt install redis-server`

    If you don't run redis on the default port, specify that in the .env file

## Installation

- Clone the Repo

    `git clone https://github.com/Iamdavidonuh/soeluma`

- change directory to project root

    `cd soeluma`

- Install Dependencies

    `yarn install`

- create **.env.development** file from **example.env** template file.

    `cp example.env .env.development`

## Available Scripts

In the project directory, you can run:

### `yarn run server`

Runs the app in the development mode using nodemon.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `yarn run test`

Runs Tests using [Jest](https://jestjs.io/)

## Alternatively

### Docker image

The docker image is availabe at [github container registry](https://docs.github.com/en/packages/guides/about-github-container-registry)

- Install Docker and Docker-Compose

- **Run** to use out of the box

    `docker pull ghcr.io/iamdavidonuh/soeluma:latest`

- get the [docker compose file](https://github.com/Iamdavidonuh/soeluma/blob/main/docker-compose.yaml) and run

    `docker-compose -f docker-compose.yaml -d up`

- Image Environmental Variables

| Variable |  Defaults | Description|
| :--- |    :---:| ---:|
| NODE_ENV | production | node environment|
| PORT | 3000 | express port|
| REDIS_DOCKER_NAME | redis |Name of the redis container |
| REDIS_DOCKER_PORT | 6379 | port your redis container is listening on |
| MONGODB_USER | admin | Mongodb user's username|
| MONGODB_PASS | password | Mongodb user's password |
| MONGODB_DOCKER_NAME | mongodb | Name of Mongodb container |
| MONGO_DBNAME | Movies | Name Database to store collections |

## Deployment

The deployed API version from `soeluma api` is available. Please read the [API documentation](https://bigbaby.stoplight.io/docs/soeluma/reference/ratings-api.v1.yaml) for usage

## License

This project is opened under the [GNU AGPLv3](./LICENSE) which allows very broad use for both academic and commercial purposes

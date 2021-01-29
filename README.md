
# Sõeluma

[![Actions Status](https://github.com/Iamdavidonuh/soeluma/workflows/Soeluma%Test/badge.svg)](https://github.com/Iamdavidonuh/soeluma/actions)

Estonian for parse, is a node js application for parsing and returning movie ratings data

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

## Alternatively

- Install Docker and Docker-Compose

- run `docker-compose -f docker-compose.yaml -d up`

## Available Scripts

In the project directory, you can run:

### `yarn run server`

Runs the app in the development mode using nodemon.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `yarn run test`

Runs Tests using [Jest](https://jestjs.io/)

## Running

Clone the project

```bash
$ git clone https://github.com/jhonpedro/api-github-clone && cd api-github-clone
```

In both ways the API will be running on http://locahost:8080

### Run with docker compose

To run this way you'll need to have Docker compose. So, just run in your terminal if you're inside of API folder

```bash
$ docker-compose up -d
```

### Running without docker

To run without docker you'll need the latest stable version of Nodejs (current 14.16) and an instace of PostgresSQL

Firts, install the dependencies

```bash
$ yarn
```

or

```bash
$ npm install
```

Fill the `.env.example` with your own credentials and rename it to `.env`
And then you'll need to change with the same information the `API/src/database/config.json` that is responsable for the connection for the next command.

Now run:

```bash
$ npx sequelize-cli db:create
```

This command created the database inside your Postgres instance, and it used the information that you've provided inside `config.json` in database folder.

To start the api just run the command

```bash
$ yarn start
```

or if you prefer npm

```bash
$ npm run start
```

To run the development server you'll run the script:

```bash
$ yarn dev
```

this comand restars the server each time you save and file .ts

ps: If you dont like that sequelize drop all databases in each reload, you can remove in `server.ts` the `Connection.sync({ force: true })` and replace with `Connection.sync({ force: false })`

You can import `api-endpoints-insomnia-v4.json` in your Insomnia to have all endpoints ready, if you want an import file like this one for Postman send me an e-mail, you can see it in [here](https://www.jhonpedro.tech/) in "Contato"

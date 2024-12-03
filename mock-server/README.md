# gex-backend-node

>> Note: We must be installed almost Node.js 22.11.0 or higher.
>> 
>> [Install Node.js](https://nodejs.org/)
>>
>> we can also use [nvm for windows](https://github.com/coreybutler/nvm-windows/releases) to manage the Node.js versions
>> or for linux/macOS we can use [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)


## Steps to run the project

### Installation

```bash
npm install
```

### Run the project

Now you can run the project.

```bash
npm start
```

It's important start the project before running the console runners because we will create .env file, if we don't have it yet,
and then the next step will be create the seed data in the database.

### Create seed data in the database

You can run the console runners to create seed data in the database.

```bash
npm run start:console-runners
```

Now, you can select the option to install seed data.

```bash 
❯   seed-data
    exit
```

After select the option `seed-data` and you will insert the seed data in the database.

### Endpoints now available

#### Get users: 

- [GET] http://localhost:3000/api/users
- [GET] http://localhost:3000/api/users?page=1&pageSize=10





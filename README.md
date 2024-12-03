# gex-front

> > Note: We must be installed almost Node.js 22.11.0 or higher.
> >
> > [Install Node.js](https://nodejs.org/)
> >
> > we can also use [nvm for windows](https://github.com/coreybutler/nvm-windows/releases) to manage the Node.js versions
> > or for linux/macOS we can use [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

## Steps to run the project

### Installation

```bash
npm install
```

When we install the project we can see that when we finish installing the dependencies the mock server dependencies are installed with the postinstall script.

_./package.json_

```json
"scripts": {
    "predev": "node ./create-dev-env.js",
    "postinstall": "cd mock-server && npm install",
    "dev": "run-p start:vite start:mock-server",
    "start:vite": "vite",
    "start:mock-server": "cd mock-server && npm run start",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "prepare": "husky install"
  },
```

### Run the project

Now you can run the project.

```bash
npm run dev
```

Checking again at the _./package.json_ file we can see that we are running two commands in parallel. The first one is the Vite server and the second one is the mock server.

We have also created a script for when we start the project if the environment is not created it will create it. This is done by the script `predev`.

_./package.json_

```json
"scripts": {
    "predev": "node ./create-dev-env.js",
    "postinstall": "cd mock-server && npm install",
    "dev": "run-p start:vite start:mock-server",
    "start:vite": "vite",
    "start:mock-server": "cd mock-server && npm run start",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "prepare": "husky install"
  },
```

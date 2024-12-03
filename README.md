### Run the project

Now you can run the project.
# Gex-front

![Contributors](https://img.shields.io/github/contributors/Lemoncode/gex-front)
![Forks](https://img.shields.io/github/forks/Lemoncode/gex-front)
![Stars](https://img.shields.io/github/stars/Lemoncode/gex-front)
![Licence](https://img.shields.io/github/license/Lemoncode/gex-front)
![Issues](https://img.shields.io/github/issues/Lemoncode/gex-front)

##  Project

Electronic Manager of Public Procurement Files of the General State Administration.

## 🚀 Installation


Clone this repository:

```bash
git clone https://github.com/Lemoncode/gex-front.git
```

Then install dependencies with:

```bash
cd gex-front
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

Now we can run the project with:

```bash
npm run dev
```

Open your browser and go to http://localhost:5173 (if this port is busy it will be changed to the next available port)

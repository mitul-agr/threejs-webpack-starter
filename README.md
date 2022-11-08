<h1 align="center">THREE.js Starter CI</h1>

This is a fork from [threejs-webpack-starter](https://github.com/ShivangAgr/threejs-webpack-starter) containing a basic setup of three.js and webpack, and added CI/CD.

### [Click here to see the project in production](https://threejs-webpack-starter.netlify.app/)

# CI/CD Features

- Deployment pipeline which triggers on pushes and pull requests to main branch.
- Workflow checks whether build succeeds in production environment.
- Publishes to Netlify.
- Bumps version and tags main branch.

# Getting Started

Follow the steps below to run this project locally. Remember to add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` under repository Secrets.

1. Fork this repository and clone the new one on your machine.

```bash
# Clone repository
$ git clone https://github.com/$your_username/threejs-webpack-starter-ci.git

$ cd threejs-webpack-starter-ci
```

2. Install dependencies via NPM or Yarn

```bash
# Install dependencies via npm
$ npm install

# Install dependencies via yarn
$ yarn install
```

3. Run the server and open a browser to visit it.

```bash
# Run server
$ npm run dev

# Run server
$ yarn dev
```

# Thank you very much!

Open to any suggestions on how to make this better! Feel free to fork the repo - Much appreciated!

## React Setup

### Create React app

#### Quick Start

```bash
npx create-react-app my-app
cd my-app
npm start
```

> If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.

Once the installation/setup is done, you can open your project folder:

```bash
cd my-app
```

Inside the newly created project, you can run some built-in commands:

```bash
npm start
```

### React with Vite Tooling

To create a React Vite project, you can follow these steps:

1. Install Node.js:
   - Visit the official Node.js website: https://nodejs.org
   - Download the appropriate version for your operating system.
   - Run the installer and follow the instructions to complete the installation.
1. Verify Node.js and npm installation:
   - Open a terminal or command prompt.
   - Run the following commands to check if Node.js and npm are installed correctly:
     ```bash
     node -v
     npm -v
     ```
1. Create a new React Vite project:

   - Open a terminal or command prompt.
   - Navigate to the directory where you want to create your project.
   - Run the following command to create a new React Vite project:
     ```bash
     npm create vite@latest
     ```
   - Enter your desired project name
     ```bash
     Project-name: my-react-project
     ```
   - Choose your framework.
     ```bash
     Select a framework:
     Vanilla
     Vue
     React
     Preact
     Lit
     Svelte
     Others
     ```
   - Choose a variant:
     ```bash
     Select a variant:
     Javascript
     Typescript
     Javascript + SWC
     Typescript + SWC
     ```
   - A new directory will be created with your project name, go to the directory.
     ```bash
     $ cd my-react-project
     ```
   - You are good to go!

1. Install all your dependencies with following command:
   ```bash
   npm install
   ```
1. Run your React app
   ```bash
   npm run dev
   ```

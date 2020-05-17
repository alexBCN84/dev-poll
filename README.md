# Dev Poll

A webapp to see what are the most popular current technologies in web development, vote your favourite ones, and ask the community for their opinions.

## Requirements
- Node.js 10.15+
- NPM 6+ / yarn


## Setup the project locally


1. Clone the project and install the node dependencies:

   ```
   npm install
   ```
   or
   ```
   yarn
   ```
2. Run the project locally
    ```
   npm start
   ```
   or
   ```
   yarn start
   ```

    ## Project highlights
    - All the components in the project are statless functional components. I have used `react hooks` to handle application state.
    - There are a few css styles in index.css file, but I have mostly used to `styled-components`.
    - In some components I have used two personal npm libraries. `react-grid-lib` to help me with layout: see [react-grid-lib](https://www.npmjs.com/package/react-grid-lib)), and `react-use-device` to render different code per device: see [react-use-device](https://www.npmjs.com/package/react-use-device).



   ## Project structure
   The project is built using [create-react-app](https://github.com/facebook/create-react-app) so the folder structure follows the common pattern of a standard CRA application.

    `▸ build/` production ready css and js files.

    `▸ src/`  application source code.

    `▸ src/components` this directory contains core components with their logic. In some cases they include style-components in the same files.

    `▸ src/atoms` pure style components that are then reused across the project.


    `▸ public/` where the `index.html` resides used by the development server.


    `▸ src/components/pages` contains the three page views of the application.


    `▸ src/utils` api calls and helper functions used across the application.

## Run tests
1. Running unit tests

```
yarn test
```
2. Running end to end tests with cypress

```
yarn run cy:open-dev
```

## Build and deploy process

To deploy this app with github pages I followed these steps: 
1. Install gh-pages package in your root directory:

   ```
   npm install --save gh-pages
   ```
   or
   ```
   yarn add gh-pages --save
   ```
2. Setup your package.json.
    ```
   change your hompage: "homepage": https://[your-user-name].github.io/[your-repo-name]/
   ```
   and add the following scripts:
   ```
   "predeploy": "yarn run build",
   ```
   "deploy": "gh-pages -d build",
   ```
3. Deploy the application
   ```
   npm run deploy

   ```
   or
   ```
   yarn deploy
   ```


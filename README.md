# My React Boileplate

## 

https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd

Steps:

1. Create directory structure
    ```
    mkidr my-react-boilerplate
    cd my-react-boilerplate
    mkdir -p src/{components,styles} test
    git init
    ```
2. Create in project root directory file ```.gitignore``` with content:
   ```
   node_modules\
   dist\
   ```
3. create file ```package.json```
    ```
    npm init -y
    ```
4.  create in project root directory file ```index.html```
5. add react dependecies:
    ```npm i react react-dom --save```
6. create file ```src/components/App.js```
7. create file ```src/index.js```
8. add babel:
   ```npm i --save-dev @babel/cli @babel/core @babel/preset-env @babel/preset-react```
9. add babel-bridge:
    ```npm i --save-dev babel-core@^7.0.0-bridge.0```
10. create in directory root file ```.babelrc``` with content:
    ```
    {
    "presets": [
        "@babel/preset-env",
        "@babel/react"
    ]
    }
    ```
11. add test dependencies:
    ```
    npm i --save-dev jest enzyme enzyme-adapter-react-16 react-test-renderer
    ```
12. create ```test/enzyme.setup.js```
13. add Jest functionality into our ```package.json```:
    ```
    {
        ...
        "jest": {
            "setupTestFrameworkScriptFile": "./test/enzyme.setup.js"
        },
        ...
    }
    ```
14. creat file with tests: ```test/App.test.js```
15. change the test script in the ```package.json```:
    ```
    "scripts": {
        "test": "jest ./test"
    },
    ```
16. run test:
    ```
    npm test
    ```
# Demo TypeScript

A demo node package for using and compiling TypeScript code.

## Setup

Install [Node.js](https://nodejs.org/en/).  Installing node.js will include `npm`.  For the purposes of this demo, you can install the latest version of Node.js (14.x as of May 2020).

If you need to run multiple versions of node.js on a single machine (like your developer lapotop), you can install [nvm](https://github.com/nvm-sh/nvm) and use it to manage multiple versions of Node.js.

Once you have Node.js installed, go to the root folder of this package and run `npm install` to get the production and development dependencies.

## Running

To run the code, you can look at the `scripts` available in the `package.json` file.  These may change over time, but for this package they are currently the following:

* build: run the TypeScript build command and generate the demo JavaScript
* lint: run `eslint` against the source TypeScript code, automatically fix most errors, and automatically apply formatting preferences from `prettier`.
* test: run the Jest tests and generate coverage.
* demo: run the demo script which, currently, logs objects to the console.

## Tour of the Code

### package.json

For any node module, you want to start from the `package.json` (see [docs](https://docs.npmjs.com/files/package.json)).  Looking at the name, website, version information, and other details will be helpful for understanding how the package is put together.

The `scripts` is one of the first things to check particularly for Node.js code you're going to be working on.  This is usually where the scripts are that are used to compile the code, run the code, and do other development tasks like linting, unit testing, code coverage measurement, etc.

When using `npm` (as opposed to `yarn` which is a competing package manager that uses the same npm registry), running `npm install` generates `package-lock.json`.  This is how developers keep the dependencies in sync even if they're running from different laptops.  Running `npm install` will re-use the dependency versions in the `package-lock.json` and updating to newer versions of the packages requires running different commands (my favorite, `npx npm-check -u` for an interactive upgrade via CLI).


### Tool Configurations

#### TypeScript

TypeScript config is handled through `tsconfig.json`.  The version in this file is suitable for demo purposes, but may need further tuning to optimize for in-browser code execution.  In addition, for browser execution TypeScript should be bundled and minified via Webpack, Parcel, or a similar tool and this package does not (currently) have one of those tools set up.

#### eslint

See `.eslintrc.js`.  This is a module that contains the eslint configuration.

We have `eslint` setup to run via `npm run lint` command which can be manually invoked.  However, this package is using `husky` (which installs git hooks) and `lint-staged` (which runs commands against only staged commits) to enforce linting on every git commit.  Because of this, a commit will not succeed (unless overridden with `--no-verify`) if the linting command fails.

#### prettier

We're using prettier to enforce code style preferences.  Prettier has a few basic configuration options in `.prettierrc` (which is a JSON format defined in more detail on their website) for things like spaces/tabs, number of spaces, semi-colons, etc.  Pick the settings once and automate the whole team following these style preferences.  Prettier is run by `eslint` and code style formatting is applied automatically.

Most code editors can be set up to automatically apply prettier styling preferences when you hit save.

* TODO: add `.vscode` configuration to this project.
* TODO: research PhpStorm options for shared settings to auto-apply code formatting preferences at save.

#### Jest

Jest is a JavaScript unit testing framework.  We're using it with `ts-jest` to support TypeScript testing.  We don't currently have other tools integrated for doing browser testing, but things like `@testing-library/*` can be useful for testing specific libraries.  Rather than requiring usage of a bunch of independent libraries for testing, assertions, and coverage -- Jest provides all of these things though there are similarities to other JS testing libraries and, in some cases, they've forked other libraries in the past.

### Language Usage

This package is using the latest version of TypeScript -- 3.9.3.  This means we have access to all the latest TypeScript features in this demo code.  In some cases, the feature usage is determined by the TypeScript config as well so certain things may not work depending on the version of JS you're compiling to.  For example, latest TS supports private class fields, but you can only use these if you're compiling to a more recent version of JS that supports those things.

There are many examples of modern JS syntax in this code base including:

* destructuring
* fat arrow functions
* `class`
* ES module syntax (`import`, `export`)

## Learning more

TypeScript

* [typescript.com](http://typescript.com/)
* [TS in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [Understanding TypeScript - 2020 Edition](https://www.udemy.com/course/understanding-typescript/) - $60 USD
  * Udemy has business licenses available (a per user cost per year, cost per user decreases with 20+ engineers)

Great JavaScript resources

* [Kangax ES6 compatibility table](https://kangax.github.io/compat-table/es6/)
* [Mozilla Developer Network](https://developer.mozilla.org/)
* [Can I Use](https://caniuse.com/)

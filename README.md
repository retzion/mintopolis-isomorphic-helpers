## mintopolis-isomorphic-helpers

[![npm version](https://badge.fury.io/js/mintopolis-isomorphic-helpers.svg)](https://badge.fury.io/js/mintopolis-isomorphic-helpers)

<br />

### Follow a Test-Driven Development approach

1. Write failing unit tests according to desired results
2. Write code to make those tests pass

<br />

### Run all tests:

`npm test`

<br />

### Make Sure to install npx globally

`npm i -g npx`

<br />

### Link your local module in another project:

1. Match your Node version between projects with `nvm use 12.22.1` (use your project version) in each project
2. In the `mintopolis-isomorphic-helpers` directory, run `npm run build && npm link .`
3. In your `my-project` directory, run `npm link mintopolis-isomorphic-helpers`

<br />

### Unlink the module from your project:

1. In the `mintopolis-isomorphic-helpers` directory, run...<br />
   `npm unlink . `
2. Ensure that your package.json file is using the correct dependency and version for `mintopolis-isomorphic-helpers`.
3. In your project, run...<br />
   `rm -rf node_modules/mintopolis-isomorphic-helpers && npm i`

- <i>Using `npm unlink`can alter your dependency declaration in your package.json file. Deleting the node module and reinstalling based on your package.json dependencies is less problematic.</i>

### Linting

This project is using Husky hooks for linting with eslint. In order for these hooks to work you may need to run the following commands:

```
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

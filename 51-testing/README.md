Another take on testing using Jest, Enzyme to build out a react-redux todo-list app.

To run tests, enter `$ yarn test` in the terminal.

## Why do we test our code?

- Make sure small parts of application are working as expected
- Make sure new features don't break old features
- Automate previous two points - checking existing code is less tedious
  simulate events like clicks, typing, form submit, fetch
- Reusable - running into the same bug more than once?
- Communicate ideas to other developers - 'self-document' your code by writing tests
- highlight bugs at their source
- proof that your code works

## What do we need to test?

- This is the trickiest part - you can test anything small or large.
- Deciding what exactly to test can be painful, but will lead to a deeper understanding of the code you wind up writing.
- Test the behavior of your app! If it's event-driven, simulate the events that trigger different functions.
- Test functions that accept input and return an output
- (in react) test components! Test their methods, whether they render, that they match a snapshot etc.
- fetches || network requests
- inputs/outputs
- test changes to data structures

## What will we use to do it?

- Jest - facebook's test runner, included with 'create-react-app'
- Enzyme - Airbnb's test suite, allows for shallow rendering, snapshotting components and more
- Rspec - Testing Ruby code (useful if your backend is built in rails!)

## SWBATS

- Learn about different testing software classifications
- Define Jest and learn how it is used
- test reducers
- Define and integrate enzyme
- use snapshot testing
- test if Child Components are rendering
- test if Components are receiving and rendering props

## Setting up test environment

To add Enzyme: \$ yarn add enzyme enzyme-adapter-react-16

Create setup file called `setupTests.js`. add the following:

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
```

to configure enzyme-to-json (which makes snapshots more readable): `$ yarn add enzyme-to-json` and add the following to your package.json:

```
    "jest": {
      "snapshotSerializers": [
        "enzyme-to-json/serializer"
      ]
    },
```

to run tests: `$ yarn test (or npm test)`

# Helpful tricks

- export a 'non-connected' or 'non-combined' version of your components/reducers for easy testing
- If a test seems simple, write it anyway! It could prevent sneaky bugs
- Keep calm, and _*read the docs!*_

## Resources

- [React and testing](https://reactjs.org/community/testing.html)
- [Jest and React](https://jestjs.io/docs/en/tutorial-react)
- [Jest Snapshots](https://jestjs.io/docs/en/snapshot-testing)
- [Create-React-App, Tests and You](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
- [Enzyme docs](https://airbnb.io/enzyme/docs/installation/)
- [Redux and testing](https://redux.js.org/recipes/writingtests)
- [Testing action creators](https://redux.js.org/recipes/writingtests#action-creators)
- [Make your snapshots readable](https://github.com/adriantoine/enzyme-to-json-v3-testing)
- [Video on Mocks](https://youtu.be/Af4M8GMoxi4)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)

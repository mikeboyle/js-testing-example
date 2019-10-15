## JavaScript Testing Workshop Example Repo

A little React app with tests that need some ❤️.

## Things you'll need

1. node. I use the popular tool [nvm](https://github.com/nvm-sh/nvm) to install multiple versions of node and switch between them from project to project.
2. yarn. This has become the industry standard for managing node dependencies. [Installation instructions for many operating systems here.](https://yarnpkg.com/en/docs/install) I installed mine with `brew install yarn`.

## Running the app

It's a [Create React App](https://github.com/facebook/create-react-app) so you can run it in the usual way:

- `yarn install` // install node dependencies
- `yarn start` // run the development server
- navigate to localhost:3000

## Running tests

- `yarn test` runs the unit tests in "watch mode". When you update the code, the tests will run themselves again.
- `yarn test:acceptance` runs the end to end browser tests in the `acceptance/` directory. We're using the Puppeteer library to launch the app server in an instance of Chromium, then visit the site and type, click, etc.

## Slide deck

[Here are the slides for this workshop!](https://docs.google.com/presentation/d/1YIxrfEw2br7GhoAvflhyVVl3S5b4QdFWS0UgaHz7bM8/edit?usp=sharing)

## Resources

- [Jest `expect` API docs](https://jestjs.io/docs/en/expect)
- [Mocking functions with Jest](https://jestjs.io/docs/en/mock-functions)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Using Jest With Puppeteer](https://jestjs.io/docs/en/puppeteer)
- [Jest-Puppeteer API docs](https://github.com/smooth-code/jest-puppeteer/blob/master/packages/expect-puppeteer/README.md#api)

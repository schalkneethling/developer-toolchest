# developer-toolchest

All your tools in one place.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4dfb254f-61fb-449f-9583-4e19774de6e9/deploy-status)](https://app.netlify.com/sites/romantic-chandrasekhar-499964/deploys)

> NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tools

All tools are listed in `src/data/tools.json`. To add a tool:

- [Fork the repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- Clone to your local machine or edit on GitHub using either the [Web Editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) or [Codespaces](https://github.com/features/codespaces)
- Create a [feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) for the tool you wish to add
- Open `tools.json` and add the tool to the list(see below for an example)
- Open a pull request 🎉

```json
{
  "id": 4,
  "title": "RealFaviconGenerator",
  "url": "https://realfavicongenerator.net/",
  "description": "With so many platforms and icons, it's hard to know exactly what you should do. What are the dimensions of favicon.ico? How many Touch icons do I need? RealFaviconGenerator did the reseach and testing for you.",
  "tag": ["utility", "online", "favicon"]
}
```

> NOTE: All fields are required. Remember to bump the `id` !important 😄

## Libraries used

- [Flexsearch](https://github.com/nextapps-de/flexsearch)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

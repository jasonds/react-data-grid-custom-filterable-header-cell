# react-data-grid-custom-filterable-header-cell

## Goal
Create a react-data-grid instance with a custom filterable header cell, for a column.

## Building the Code
```bash
git clone https://github.com/jasonds/react-data-grid-custom-filterable-header-cell.git
cd react-data-grid-custom-filterable-header-cell
npm install
npm start
```

## Overview
Navigate here to see the custom filterable header cell:  
<a href="https://github.com/jasonds/react-data-grid-custom-filterable-header-cell/tree/master/src/components/global/FilterableHeaderCell.tsx">https://github.com/jasonds/react-data-grid-custom-filterable-header-cell/tree/master/src/components/global/FilterableHeaderCell.tsx</a>

See it used here:  
<a href="https://github.com/jasonds/react-data-grid-custom-filterable-header-cell/blob/900caa0496ace4d8e05b136fa2af31a25114f1f9/src/pages/tasks/index.tsx#L43-L52">https://github.com/jasonds/react-data-grid-custom-filterable-header-cell/tree/master/src/pages/tasks/index.tsx</a>

```bash
    {
      key: 'description',
      name: 'Description',
      editable: false,
      filterable: true,

      // Omit the filterRenderer property to use the default renderer found here:
      // https://github.com/adazzle/react-data-grid/blob/master/packages/common/cells/headerCells/FilterableHeaderCell.js
      filterRenderer: CreateFilterableHeaderCell(['/'])
    },
```


---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

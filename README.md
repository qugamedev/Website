# Queen's Game Development Club - Website Repository

This is the repository for the Queen's Game Development Club (QGDC) website.


## Figma Design

The Figma design used for this website can be found [here](https://www.figma.com/design/nFfrRugpOiNgpcul5EAfBv/QGDC-Static-Website?node-id=12-165).

## Website Deployment

This website is hosted using Vercel. The management of the Vercel deployment settings will be dealt with by the QGDC Website Director. If you believe there is an issue with the deployment, please contact either the QGDC Co-Chairs or the QGDC Website Director so that it can be fixed right away.

Assuming the Vercel deployment functions appropriately, once a pull request is merged into the `main` branch of this repository, the deployment will automatically update with the pull request's changes. As such, developers should not need to worry about deployment.

## Navigating the Repository

There are two main directories in the repository - `website` and `backend`.

The `website` directory contains all the front-end components for the website, including image assets and JavaScript components/pages. If you are working on any front-end task, this is the directory you want to be in. Details about what's in the `website` directory are found in the README.md file in said directory.

The `backend` directory contains all the back-end components for the website, including a database and a test environment for admin users. If you need to work on a back-end task, this is the directory you want to be in. Details about the contents of the `backend` directory are found in the README.md file in said directory.


## Running a Localhost (for Developers)

To run the website locally for development and testing purposes, clone this repository into your code editor of choice. Then, perform the following commands in your code editor's terminal in the order of the top-most command to the bottom-most command:
```
cd website
```
```
npm start
```

Note that the `cd website` command takes you to the front-end directory, and thus runs the front-end version of the website. If you want to run the back-end version of the website locally, replace the `cd website` command with the command `cd backend/test_environment/qgdc`.

After running `npm start`, the localhost will automatically open in your default browser.


## Known Local Installation Errors

If when running the `npm start` command in either directory you receive an error, you may need to update the `react-scripts` dependency. To do so, run the following command:
```
npm install react-scripts --save
```
Once the dependency is finished installing, try running `npm start` again.
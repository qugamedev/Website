# Navigating the `website` Directory

The `website` directory contains two directories and the following four files:
- `package.json` and `package-lock.json` : Store the package dependencies needed for the website to function.
- `tailwind.config.js` : The config file for TailwindCSS. May need to be edited to allow for custom colours or fonts.
- `vite.config.js` : The config file for Vite. May need to be edited to allow for different build settings.

The following is the information for the aforementioned two directories stored within `website`:
- `public` : This directory contains images of the QGDC logo.
- `src` : The main directory within `website` that stores all the components and styling of the website. Has the following notable sub-directories and files:
   * `App.jsx` : A React component file that stores all the main routing and displays all the components for the website.
   * `index.jsx` : The main renderer file for the website. Renders the "App" component from `App.jsx`.
   * `assets` : The directory that stores all the photos and shapes used across the website, including a blender model called `qgdc.obj` that's used on the 'About' page of the website.
   * `components` : The directory that stores the different pages of the website (such as `About.jsx` being the 'About' page), as well as helper components used on said pages (such as `Person.jsx` being a component used to create the 'blocks' to showcase each team member on the 'About' page).

There are two main commands used when running the front-end of the website. Those being:
- ### `npm run dev`
   * Runs the app in development mode at [http://localhost:3000](http://localhost:3000). Once this command is run, the localhost will automatically open in your default browser. Additionally, when changes are made to the files, the page will reload to add those changes to the website.

- ### `npm run build`
   * Builds the app for production to the `build` folder.

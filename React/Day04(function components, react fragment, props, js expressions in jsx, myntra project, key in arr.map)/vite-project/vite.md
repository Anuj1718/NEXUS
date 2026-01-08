vite
npm create vite@latest

it will automatically prompt you to select a framework and variant. Choose "React" and "JavaScript" respectively.
you will see it will automatically create a project folder with the necessary files and configurations for a React application even index.html, main.jsx, App.jsx, and vite.config.js.

where is js files located in vite project?
The JavaScript files in a Vite project are typically located in the "src" folder.
You can navigate to the "src" folder to find and edit your JavaScript files.
they are usually named with a .js or .jsx extension, depending on whether you are using plain JavaScript or JSX syntax for React components.
For example, you might find files like "main.jsx" and "App.jsx" inside the "src" folder.
to see which is the main file, check src tag in index.html file or main file in vite.config.js or package.json file.

to install dependencies and get node-modules folder, run the following command in your project directory:
npm install

dependencies are of two types:
1. dependencies: These are the packages required for your application to run in production. They are listed under the "dependencies" section in your package.json file. Examples include React, ReactDOM, etc.
2. devDependencies: These are the packages needed only during the development phase. They are listed under the "devDependencies" section in your package.json file. Examples include parcel, vite, babel, testing libraries, linters, etc.

to run project in development mode, use the following command:
npm run dev
for parcel, use:
npx parcel index.html

This command starts a development server and provides you with a local URL (usually http://localhost:3000) where you can view your React application in the browser.

to build the project for production, use the following command:
npm run build  
for parcel, use:
npx parcel build index.html
This command generates optimized and minified files in a "dist" folder, ready for deployment.

whenever u see a project, go to package.json file to see the scripts, dependencies, devDependencies and other configurations related to the project.

 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }

then write 
npm run dev to start the development server.(if instead of dev, there is start, then write npm start)
npm run build to create a production build. (optimized files in dist folder)
npm run lint to run ESLint on the project files.
npm run preview to preview the production build locally.

You can also create custom scripts in the "scripts" section of package.json. For example, you might add a script like this:
"cool": "this is a long command to demonstrate a custom script"
You can then run this custom script using the command:
npm run cool

# Skattemelding

## How to build manually

The project is built using npm from the current Node LTS. Install with [nvm](https://github.com/nvm-sh/nvm);

    nvm install --lts

Then run

    npm install

to install the dependencies.

    npm start

will start a local web server and continuously build the documentation as you make changes.
The documentation will be available at http://localhost:8000/documentation

## Publishing the github pages

To build the documentation pages with gatsby

    npm run build
    
Then use the following command to publish to GitHub pages

    npm run deploy
    

## Adding a \/documentation page

Add a folder in /docs/documentation. Name it properly, as it will be reflected in the url.

In that folder, add an index.md file. At the beginning of that file, add

    ---
    icon: ""
    title: ""
    description: ""
    ---

The values will be displayed in the documentation root page. Finally, go wild with markdown.

Icon reference: https://skatteetaten.github.io/frontend-components/#icon

## Changes to do after forking this repository

- Update this README.md at will
- Delete `package.lock.json`
- Change name `name` and `description` in `package.json`
- Change `title`, `menu items` and `pathPrefix` in `gatsby-config.js`
- run `npm install`
- Make changes to the documentation via the contents in the docs folder

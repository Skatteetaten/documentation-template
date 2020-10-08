# Documentation template for Skatteetaten on Github

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Requirements

- Minimum Node v10.13.0 - (Required by Prettier v2)
- All publicly displayed pages in skatteetaten.github.io/* must use Skatteetatens [visual profile](https://www.skatteetaten.no/stilogtone/) - developers and designers should use the tool presented [here](https://skatteetaten.github.io/frontend-components/)

## Setup

### Required changes to code when using template:

1. Change `name`, `groupId` and `homepage` from `package.json`.
2. Change `deploy` script in package.json to point to your repository 
3. Change `projectKey` and `projectName` from `sonar-project.properties`
4. Change `io.k8s.description` and `io.openshift.tags` from `openshift.json`
5. Change `BrowserRouter basename` and `Layout title` from `App.tsx`
4. Remove package-lock.json and run `npm install`

## Publish 

### Publish pages to skatteetaten.github.io/\<your repository>

1. Commit and push changes
2. Run command `npm run build` followed by `npm run deploy` to publish

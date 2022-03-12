# electron-vue
This repo is a boilerplate for Electron + Vue 3. 
It also uses other technologies and frameworks like Typescript, SCSS/SASS and TailwindCSS.

## How to use

### Project setup
```
npm install
```

### Compiles Vue code and hot-reloads for development
```
npm run serve
```

### Compiles and minifies Vue code for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Compiles and minfies Vue code for production, runs app with Electron
```
npm start
```

### Compiles and minfies Vue code for production, packages app with Electron
```
npm run build-win64
```

## TODO
- Fix electron-packager command so it only include compiled files
- Add electron-packager commands for other platform (Linux, MacOS, ARM64)
- Add cleanup command
- Fix .gitignore to ignore packaged app files

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

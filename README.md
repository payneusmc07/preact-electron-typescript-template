# Snowpack/Electron template with support for

```text
- Typescript
- Sass/SCSS
- Emotion CSS
- Styled Components
- TailwindCSS
```

## Available Scripts

### yarn start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits, thanks to Hot Reloading.


### Q: Do I need electron-builder
No electron-builder is needed, simply run 
```shell
yarn run build
```
Which builds the app for production. You will find the result in the `build/` folder.
This script correctly bundles Preact in production mode and 
optimizes the build for the best performance.

### Q: Do I need to eject?

No eject needed! Snowpack guarantees zero configuration lock-in.

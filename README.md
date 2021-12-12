# Tauri & Webpack Boilerplate
> Quick and easy way to start developing cross-platform desktop applications with help of the Tauri framework and webpack as a bundler and an html file as the entry point.

To get started, clone the repository and install all the required dependencies:
```
git clone https://github.com/denisloch/tauri-webpack-boilerplate.git your-project-name
cd your-project-name
npm install
```
## Development
`package.json` provides three run-scripts, two of which are for development.  
Before starting, it is required to run `npm run build` once, so `main.js` in `/dist/` is created, which is required for active development. This might take some time because Tauri has to collect all Rust crates but any subsequent run will be quicker as it only has to rebuild new code. 
In order to get started, first execute `npm run webpack-dev` to spin up the webpack bundler, then execute `tauri-dev` to start Tauri. Both have to run simultaneously.  
The app has live-reloading capabilities so if any file in `src` or `dist` is changed, it will automatically reflect in the app. If any Rust file is changed, Tauri will automatically close the app, recompile and start again.

#### Changing ports
To change the ports of webpack's live-server, two changes have to be made. Firstly, go to `package.json` in `/` and edit the `webpack-dev` script under the `scripts` category from 3000 to a desired port. Secondly, go to `/src-tauri/tauri.conf.json` and change the port of the development server, after `devPath` under the `build` category.

## Packaging
To package the app for production, simply utilize:
```
npm run build
```

## Docs
For more information, check out the [Tauri](https://tauri.studio/) website and its [docs](https://tauri.studio/en/docs/getting-started/intro).


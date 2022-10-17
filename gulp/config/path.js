import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './source';

export const path = {
    build: {
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        img: `${buildFolder}/img/`,
        js: `${buildFolder}/js/`

    },
    src: {
        less: `${srcFolder}/less/style.less`,
        html: `${srcFolder}/*.html`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg}`,
        js: `${srcFolder}/**/*.js`
    },
    watch: {
        html: `${srcFolder}/*.html`,
        less: `${srcFolder}/**/*.less`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}
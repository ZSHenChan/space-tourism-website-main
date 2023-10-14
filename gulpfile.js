const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

//disposing unwanted css
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['starter-code/*.html','*.html'] }))
    .pipe(dest('css'))
}

function watchTask() {
    //update when the scss and html files are changed
  watch(['sass/**/*.scss', '*.html','shinobi/**/*.scss','starter-code/**/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)

//npm init
//npm install gulp gulp-sass sass --save-dev
//npm install gulp-purgecss --save-dev
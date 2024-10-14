const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

// Compile SASS
gulp.task('sass', function () {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'));
});

// Watch SASS files for changes
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

// Default task to run both 'sass' and 'watch'
gulp.task('default', gulp.parallel('sass', 'watch'));

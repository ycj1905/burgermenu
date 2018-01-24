var gulp = require('gulp');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');
/* Mixed */
var ext_replace = require('gulp-ext-replace');

gulp.task('build-css', function () {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['build-css']);
});

gulp.task('default', ['watch','build-css' ]);

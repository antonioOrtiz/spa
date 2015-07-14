var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync').create();

gulp.task('bs-reload', function() {
    browserSync.reload();
});


 var paths = {
       scss:'app/scss/style.scss',
       css: 'app/css',
       js: 'app/js/*.js',
       html: 'app/*.html'
    };

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/style.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return sass(paths.scss, {style:'expanded'})
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('default', ['serve']);




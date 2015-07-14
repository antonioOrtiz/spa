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



    var paths = {
       scss:'app/scss/style.scss',
       css: 'app/css',
       js: 'app/js/*.js',
       html: 'app/*.html',
       publicCss: 'app/public/css',
       publicJs: 'app/public/js',
       html: 'app/*.html'
    };

gulp.task('js',function(){
    return gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.publicJs))
        .pipe(uglify())
        .pipe(gulp.dest(paths.publicJs))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], browserSync.reload);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return sass('app/scss/style.scss', {style:'expanded'})
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('app/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(notify({ message: 'Styles task complete' }));
});

// Static Server + watching scss/html files
// use default task to launch Browsersync and watch JS files

gulp.task('serve', ['sass', 'js'], function() {

    browserSync.init({
        server: "./app/public"
    });


    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(paths.scss, ['sass']);
    gulp.watch(paths.js, ['js']);
    gulp.watch('app/public/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);




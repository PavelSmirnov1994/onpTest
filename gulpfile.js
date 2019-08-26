const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');





const styleFiles = [
    
    './src/css/style.sass'

    
]

const scriptFiles = [
    
    './src/js/**.js'
]

const libFiles = [
    './src/css/libs/**/**.scss'
]
const libJsFiles = [
    './src/js/libs/**/**.js'
]

//таск на стили
gulp.task('styles', () => {

    return gulp.src(styleFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        overrideBrowserslist:  ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('./'))
    //выходная папка дял стилей
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});
//переброс в билд библиотек scss
gulp.task('libCSS', () => {
    return gulp.src(libFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css/libs'))
});
//переброс в билд библиотек js
gulp.task('libSCRIPTS', () => {
    return gulp.src(libJsFiles)
    .pipe(uglify({
        toplevel: true
    }))
    .pipe(gulp.dest('./build/js/libs'))
});
//таск на скрипты
gulp.task('scripts', () => {
    return gulp.src(scriptFiles)
    .pipe(concat('script.js'))
    .pipe(uglify({
        toplevel: true
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
});

gulp.task('del', () => {
    return del(['build/*'])

});
gulp.task('fonts', () =>{
    return gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./build/fonts/'))
});

gulp.task('img-compress', () =>{
    return gulp.src('./src/img/**')
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(gulp.dest('./build/img/')) 
});
gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/img/**', gulp.series('img-compress'))
    gulp.watch('./src/fonts/**', gulp.series('fonts'))
    gulp.watch('./src/css/**/*.scss', gulp.series('styles'))
    gulp.watch('./src/css/**/*.sass', gulp.series('styles'))
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('del', gulp.parallel('styles', 'libCSS', 'scripts','libSCRIPTS', 'img-compress', 'fonts'), 'watch'));

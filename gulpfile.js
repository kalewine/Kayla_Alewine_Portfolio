const gulp = require('gulp');
const uglify = require('gulp-uglify');
const webp = require("gulp-webp");
const squoosh = require('gulp-libsquoosh');
const minify = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const { watch } = require('browser-sync');
const browsersync = require('browser-sync').create();



// Copy All HTML files
gulp.task('html', () => {
    return gulp.src('src/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
})


gulp.task('css', function(){
    return gulp.src('src/*.css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist'));
 });

gulp.task('js', function(){
    return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
 });
 

// Optimize images
gulp.task('imagemin', () => {
    return gulp.src('src/images/**')
    .pipe(squoosh())
    .pipe(gulp.dest('dist/images'))
})


// Convert images to webp
gulp.task('webp', () => {
    return gulp.src(['src/images/*.jpg', 'src/images/*.jpeg', 'src/images/*.png' ])
        .pipe(webp())
        .pipe(gulp.dest('dist/images/webp'))
});

// BrowserSync tasks
let browsersyncServe = (cb) => {
    browsersync.init({
        server: {
            baseDir: './dist'
        }
    })
    cb();
}

let browsersyncReload = (cb) => {
    browsersync.reload();
    cb();
}

// Watch task
gulp.task('watchTask', () => {
    gulp.watch('src/*.html', gulp.series('html', browsersyncReload))
    gulp.watch('src/*.css', gulp.series('css', browsersyncReload))
    gulp.watch('src/*.js', gulp.series('js', browsersyncReload))
    gulp.watch(['src/images/*.jpg','src/images/*.pgn'], gulp.series('webp', browsersyncReload))
    gulp.watch('src/images/*.svg', browsersyncReload)
})

exports.default = gulp.series('html', 'css', 'js', 'imagemin', 'webp', browsersyncServe, 'watchTask')


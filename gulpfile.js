import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import imagemin from "gulp-imagemin";

const sass = gulpSass(dartSass);

const paths = {
    images: "./src/images/*",
    scripts: "./src/scripts/*.js",
    styles: "./src/styles/*.scss",
    build: {
        images: "./build/images",
        scripts: "./build/scripts",
        styles: "./build/styles"
    }
};

export const imageCompress = () => {
    return gulp.src(paths.images)
        .pipe(imagemin())
        .on("error", (error) => {
            console.error("Image minification error: ", error);
        })
        .pipe(gulp.dest(paths.build.images));
}

export const compressJS = () => {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest(paths.build.scripts));
}

export const compilateSass = () => {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest(paths.build.styles));
}

export const watchFiles = () => {
    gulp.watch(paths.styles, { ignoreInitial: false }, compilateSass);
    gulp.watch(paths.scripts, { ignoreInitial: false }, compressJS);
    gulp.watch(paths.images, { ignoreInitial: false }, imageCompress);
}

export default watchFiles;

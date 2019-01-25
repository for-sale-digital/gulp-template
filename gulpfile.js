const gulp = require('gulp');
const concat = require('gulp-concat');
const duration = require('gulp-duration');
const header = require('gulp-header');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const timestamp = require('time-stamp');
const { argv } = require('yargs');

const sass = require('gulp-sass');
const sasslint = require('gulp-sass-lint');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');

const eslint = require('gulp-eslint');
// const babel = require('gulp-babel');
const cache = require('gulp-cached');
const uglify = require('gulp-uglify');

const config = require('./gulpconfig');
const pkg = require('./package.json');


const sassFiles = `${config.dir.sources.sass}**/*.s+(a|c)ss`;
const jsFiles = `${config.dir.sources.js}**/*.js`;

// Toggle production mode via flag "--production" to prevent linters from being executed
const prodMode = !!argv.production;


const lintSass = (done) => {
    if (!prodMode) {
        return gulp.src(sassFiles)
            .pipe(sasslint({
                configFile: '.sass-lint.yml',
            }))
            .pipe(sasslint.format())
            .pipe(sasslint.failOnError())
            .pipe(duration('Lint Sass files'));
    }
    done();

    return false;
};

const compileSass = () => gulp.src(`${config.dir.sources.sass}${config.basename}.s+(a|c)ss`)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([
        postcssPresetEnv(),
    ]))
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(header(config.banner, {
        pkg,
        timestamp,
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(duration('Compile Sass files'))
    .pipe(gulp.dest(config.dir.output.css));


const watchCompileSass = () => {
    gulp.watch(sassFiles, gulp.parallel(['compile-sass']));
};

const lintJs = (done) => {
    if (!prodMode) {
        return gulp.src([jsFiles, './gulpfile.js', './gulpconfig.js'])
            .pipe(cache('lint-js'))
            .pipe(eslint())
            .pipe(duration('Lint JavaScript'))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    }
    done();

    return false;
};

const compileJs = () => gulp.src(jsFiles)
    .pipe(sourcemaps.init())
    // .pipe(babel({
    //     presets: ['@babel/env'],
    // }))
    .pipe(concat(`${config.basename}.js`, { newLine: ';' }))
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min',
    }))
    .pipe(header(config.banner, {
        pkg,
        timestamp,
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(duration('Compile JavaScript'))
    .pipe(gulp.dest(config.dir.output.js));

const watchCompileJs = () => {
    gulp.watch(jsFiles, gulp.parallel(['compile-js']));
};

const watch = () => {
    gulp.watch([
        jsFiles,
        sassFiles,
    ], gulp.parallel(['default']));
};

gulp.task('lint-sass', lintSass);
gulp.task('compile-sass', gulp.series('lint-sass', compileSass));
gulp.task('compile-sass:watch', watchCompileSass);
gulp.task('lint-js', lintJs);
gulp.task('compile-js', gulp.series('lint-js', compileJs));
gulp.task('compile-js:watch', watchCompileJs);
gulp.task('default', gulp.series('compile-sass', 'compile-js'));
gulp.task('watch', watch);
gulp.task('default:watch', gulp.series('default', watch));

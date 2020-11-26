const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const fancy_log = require("fancy-log");
const sass = require("gulp-sass");
const paths = {
  pages: ["src/*.html"],
  images: ["src/img/*.png", "src/img/*.jpg"],
};
const terser = require("gulp-terser");
const run = require("gulp-run");
const cleanCSS = require("gulp-clean-css");

const browserBuild = browserify({
  basedir: ".",
  debug: true,
  entries: ["src/index.ts"],
  cache: {},
  packageCache: {},
}).plugin(tsify, {
  project: "src/tsconfig.json",
});

gulp.task("styles", function () {
  return gulp
    .src("src/css/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/assets/css"));
});

gulp.task(
  "copy-html",
  gulp.parallel(
    function () {
      return gulp.src(paths.pages).pipe(gulp.dest("dist"));
    },
    function () {
      return gulp.src(paths.images).pipe(gulp.dest("dist/assets/img"));
    }
  )
);

function processBundle() {
  return () => {
    return browserBuild
      .bundle()
      .on("error", fancy_log)
      .pipe(source("assets/js/app.js"))
      .pipe(gulp.dest("dist"));
  };
}

gulp.task("clean", function () {
  return run("npm run clean").exec();
});

gulp.task(
  "build",
  gulp.series(gulp.parallel("copy-html", "styles"), processBundle())
);

gulp.task("default", gulp.series("clean", "build"));

gulp.task("minify-js", function () {
  return gulp.src("dist/assets/js/*.js").pipe(terser()).pipe(gulp.dest("dist"));
});

gulp.task("minify-css", function () {
  return gulp
    .src("dist/assets/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist"));
});

gulp.task("minify", gulp.parallel("minify-js", "minify-css"));

gulp.task(
  "watch",
  gulp.series("clean", "build", function () {
    gulp.watch("src/**/*.ts", gulp.series(processBundle()));
    gulp.watch("src/css/**/*.scss", gulp.series("styles"));
    gulp.watch("src/**/*.html", gulp.series("copy-html"));
  })
);

browserBuild.on("update", () => browserBuild);
browserBuild.on("log", fancy_log);

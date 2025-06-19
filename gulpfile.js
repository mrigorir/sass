const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("core/index.scss")
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules', 'core'] // Para imports más limpios
    }).on('error', sass.logError))
    .pipe(purgecss({
      content: ['**/*.html', '**/*.js'] // Opcional: elimina CSS no usado
    }))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["core/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
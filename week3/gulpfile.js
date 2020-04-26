var gulp = require('gulp');  //載入 gulp
var pug = require('gulp-pug'); //載入 gulp-pug

gulp.task('pug', () => {           //新增一任務 'pug'
  return gulp
    .src('./source/index.pug')  // 任務的來源檔案位於 source 的所有 .pug檔案
    .pipe(pug({
      pretty: true                  //使用 pipe連接任務，經過 pug 的美化程式碼處理後
    }))
    .pipe(gulp.dest('./public/'))   //將檔案 html 產出至 public 資料夾
});

gulp.task('watch', () => {
  gulp.watch('./source/**/*.pug', gulp.series('pug'));
});

const { series } = require('gulp');
// clean function 不會被輸出，所以可以放一些私人的 task
// 但依然可以被在 series() 上使用
function clean(cb) {
  // body omitted
  cb();
}
// build function 可以被輸出，所以他是公開的，也可以在 gulp 命令上執行
// 同樣的，也可以在 series() 上被使用
function build(cb) {
  // body omitted
  cb();
}
exports.build = build; // 這邊被導出的才可以使用 gulp，稱為公開
exports.default = series(clean, build);
// 私人公開全都要從這邊，才可以被 default 執行
// 這邊公開私人的差異就在於，公開可以被單獨使用，私人則否
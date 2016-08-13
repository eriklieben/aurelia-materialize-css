var gulp = require('gulp');
var paths = require('../paths');
var coveralls = require('gulp-coveralls');
 
gulp.task('coveralls', function() {
  gulp.src(paths.lcov)
      .pipe(coveralls());
});
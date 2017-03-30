'use strict';

module.exports = function() {
  $.gulp.task('copy:fonts', function() {
    return $.gulp.src($.config.src + '/fonts/**/*.*')
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};

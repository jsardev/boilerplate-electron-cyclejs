import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import electronConnect from 'electron-connect';

const electron = electronConnect.server.create();

gulp.task('scripts:compile:watch', () =>
    gulp.watch('src/renderer/**/*.js', ['scripts:compile'])
);

gulp.task('scripts:compile', () =>
    gulp.src('src/renderer/**/*.js')
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'))
);

gulp.task('serve', ['scripts:compile', 'scripts:compile:watch'], () => {
    electron.start();

    gulp.watch('src/main.js', electron.restart);
    gulp.watch('dist/**/*.{js,css}', electron.reload);
});
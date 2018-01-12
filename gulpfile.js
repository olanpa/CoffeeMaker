var gulp        = require('gulp'),
    sass        = require("gulp-sass"),
    browserSync = require('browser-sync');
gulp.task('scssToCss',function () {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.reload({stream: true})) //оновлення сторінки при зміні scss
});
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Виконуєм browser Sync
        server: { // Параметри сервера
            baseDir: 'app' // Директорія для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'scssToCss'],function(){
    gulp.watch('app/scss/*.+(scss|sass)',['scssToCss']);
    gulp.watch('app/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});
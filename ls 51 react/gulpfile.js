global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
        serverDir: './app/build',
        tasks: require('./gulp/config'),
        src: {
            html: './app/src/*.{html,pug}',
            style: './app/src/styles/*.*',
            js: './app/src/scripts/*.js',
            img: './app/src/img/*.{jpg,jpeg,png,jfif}',
            fonts: './app/src/fonts/**/**/*.*'
        },
        build: {
            html: './app/build/',
            style: './app/build/styles/',
            js: './app/build/scripts/',
            img: './app/build/img/',
            fonts: './app/build/fonts/'
        },
        watch: {
            html: ['./app/src/*.{html,pug}', './app/src/view/**/*.{html,pug}'],
            style: './app/src/styles/**/**.*',
            js: './app/src/scripts/*.js',
            img: './app/src/img/*.{jpg,jpeg,png,jfif}',
            fonts: './app/src/fonts/**/*.*'
        }
    },
    tasks: {
        default: ['html', 'style', 'img', 'js', 'fonts', 'watch', 'serve'],
        build: ['html', 'style', 'img', 'js', 'fonts']
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)());

for (const value in $.tasks) {
    $.gulp.task(value, $.gulp.series($.gulp.parallel(...$.tasks[value])))
}

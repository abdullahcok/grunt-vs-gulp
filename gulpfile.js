var gulp = require('gulp');
var scss = require('gulp-css-scss');
var concat = require('gulp-concat');
var app = {};

/*** making some tasks to do and done ***/

gulp.task('task-todo', function(){
        console.log('I have task to do!');
    }
);

gulp.task('task-done', function(){
        console.log('I had task has been finished!');
    }
);


/*************/

gulp.task('scss', () => {
  return gulp.src('my-file.css')
    .pipe(cssScss())
    .pipe(gulp.dest('build-gulp/scss'));
});

gulp.task('default', ['scss']);


/**********************/

gulp.task('concat-task', () => {
    return gulp.src('src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build-gulp/script.js'));

});

/*************************/

app.toMail = function(){
  debugger;
  alert("It opens in a second");
};

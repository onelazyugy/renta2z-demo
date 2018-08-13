var gulp = require('gulp'),
  gutil = require('gulp-util'),
  fs = require('fs'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  del = require('del'),
  configLoc = './src/app/config/config.json'

function generateConfig(env) {
  var configJson = fs.readFileSync(configLoc, 'utf8');
  configJson = JSON.parse(JSON.stringify(configJson));
  var appConfig = JSON.parse(configJson)[env];
  return appConfig;
}

gulp.task('local', function(){
    return gulp.src('src/app/config/globals.temp')
    .pipe(replace('$version', '"1.0.0"'))
    .pipe(replace('$config', JSON.stringify(generateConfig('local'))))
    .pipe(rename('globals.js'))
    .pipe(gulp.dest('src/app/config/'));
  });
  
  gulp.task('dev', function(){
    return gulp.src('src/app/config/globals.temp')
    .pipe(replace('$version', '"1.0.0"'))
    .pipe(replace('$config', JSON.stringify(generateConfig('dev'))))
    .pipe(rename('globals.js'))
    .pipe(gulp.dest('src/app/config/'));
  });
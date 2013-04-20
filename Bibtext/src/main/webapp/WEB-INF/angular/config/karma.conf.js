basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['PhantomJS'];

junitReporter = {
//  outputFile: 'test_out/unit.xml',
  outputFile: '../../../../../target/surefire-reports/jasmine-unit.xml',
  suite: 'unit'
};

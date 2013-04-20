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

preprocessors = {
  '**/app/js/*.js': 'coverage'
};

junitReporter = {
//  outputFile: 'test_out/unit.xml',
  outputFile: '../../../../../target/surefire-reports/jasmine-unit.xml',
  suite: 'unit'
};

coverageReporter = {
  type: 'cobertura',
  dir: '../../../../../target/site/cobertura/',
  file: 'front-coverage.xml'
};

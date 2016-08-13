module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['systemjs', 'jasmine'],
    systemjs: {
      configFile: './config.js',
      config: {
        paths: {
          "typescript": "node_modules/typescript/lib/typescript.js",
          "systemjs": "node_modules/systemjs/dist/system.js",
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          "babel": "jspm_packages/npm/babel-core@6.13.2/lib/api/browser.js",
          'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
        },
        packages: {
          'test/unit': {
            defaultExtension: 'ts'
          },
          'src': {
            defaultExtension: 'ts'
          }
        },
        transpiler: 'typescript'
      },
      serveFiles: [
        'src/**/*.ts',
        'dist/**/*.js',
        'jspm_packages/**/*.js',
        'jspm_packages/**/*.css',
        'jspm_packages/**/*.ttf',
      ]
    },
    files: [
      'node_modules/aurelia-polyfills/dist/aurelia-polyfills.js',
      'test/unit/setup.ts',
      'test/unit/*.ts',
      'test/unit/**/*.ts'
    ],
    exclude: [],
    preprocessors: {
        'dist/**/*.js': ['babel', 'coverage']
    },
    reporters: ['progress','coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,  coverageReporter: {
            // isparta works as a custom instrumentor, which must be registered in Karma config:
            instrumenters: {isparta: require('isparta')},
            instrumenter: {
                'dist/**/*.js': 'isparta'
            },

            reporters: [
                {
                    type: 'text-summary'
                },
                {
                    type: 'html',
                    dir: 'reports',
                    subdir: 'coverage'
                },
                {
                    type: 'lcovonly',
                    dir: 'reports',
                    subdir: 'coverage',
                    file: 'report-lcov.txt'
                }
            ]
        }
  });
};
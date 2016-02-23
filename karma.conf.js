module.exports = function(config){
  config.set({

    basePath : './',

    files : [
        {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
        {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
        {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
        {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
        {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
        {pattern: 'karma-test-shim.js', included: true, watched: true},
      
        {pattern: 'app/build/**/*.js', included: false, watched: true},
        
        {pattern: 'app/src/**/*.ts', included: false, watched: false},
        {pattern: 'app/build/**/*.js.map', included: false, watched: false}        
      
    ],
    
    // proxied base paths
    proxies: {
        // required for component assests fetched by Angular's compiler
        '/src/': '/base/src/'
    },    

    autoWatch : false,
    colors: true,
    singleRun: true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'app/test/unit.xml',
      suite: 'unit'
    }

  });
};
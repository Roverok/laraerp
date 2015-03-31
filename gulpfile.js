var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.styles([
        "../../bower_components/angular-material/angular-material.min.css",
        "*"
    ]);
    
    mix.scripts([
        "../../bower_components/angular/angular.js",
        "../../bower_components/angular-route/angular-route.min.js",
        "../../bower_components/angular-animate/angular-animate.js",
        "../../bower_components/angular-aria/angular-aria.js",
        "../../bower_components/angular-material/angular-material.js",
        "*",
        "factories/*.js",
        "controllers/*.js"
    ], 'public/js/main.js');
});

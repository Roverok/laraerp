<!DOCTYPE html>
<html lang="en" >
    <head>
        <title>Angular Material - Starter App</title>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />

        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic'>
        <link rel="stylesheet" href="/css/all.css" />
    </head>

    <body ng-app="app" layout="column">

        <md-toolbar>
            <div class="md-toolbar-tools">
                <span>LaraERP</span>
            </div>
        </md-toolbar>

        <md-content class="md-padding">
            <div class="container" id="view" ng-view></div>
        </md-content>

        <script src="/js/main.js"></script>

    </body>
</html>

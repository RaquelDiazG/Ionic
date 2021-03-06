// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'FilmsModule'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'js/app/menu/menu.html'
                    })
                    .state('app.about', {
                        url: '/about',
                        views: {
                            'content': {
                                templateUrl: 'js/app/main/about.html'
                            }
                        }
                    })

                    .state('app.films', {
                        url: '/films',
                        views: {
                            'content': {
                                templateUrl: 'js/app/films/Films/films.html',
                                controller: 'FilmsController',
                                resolve: {
                                    films: function (FilmsService) {
                                        return FilmsService.getFilms();
                                    }
                                }
                            }
                        }
                    })
                    .state('app.films-detail', {
                        url: '/films/detail/:filmTitle',
                        views: {
                            'content': {
                                templateUrl: 'js/app/films/FilmsDetails/films-detail.html',
                                controller: 'FilmDetailsController',
                                resolve: {
                                    film: function (FilmsService, $stateParams) {
                                        return FilmsService.getFilm($stateParams.filmTitle);
                                    }
                                }
                            }
                        }
                    })

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/playlists');
        });

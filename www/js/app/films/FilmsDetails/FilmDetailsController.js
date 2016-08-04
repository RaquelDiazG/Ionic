angular.module('FilmsModule')

        .controller('FilmDetailsController', function ($scope, Film, film) {
            var initView = function () {
                $scope.film = film;
            };

            $scope.$on('$ionicView.loaded', function (event, data) {
                initView();
            });
        });



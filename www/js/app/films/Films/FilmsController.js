angular.module('FilmsModule')

        .controller('FilmsController', function ($scope, Film, FilmsService) {

            var initView = function initView() {
                FilmsService.getFilms().then(
                        function () {
                            $scope.films = FilmsService.films;
                        },
                        function (error) {
                            $scope.films = [];
                        }
                )

            }
            $scope.$on('$ionicView.loaded', function (event, data) {
                initView();
            });
        });



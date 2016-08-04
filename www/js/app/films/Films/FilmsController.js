angular.module('FilmsModule')

//        .controller('FilmsController', function ($scope, Film, FilmsService) {
        .controller('FilmsController', function ($scope, Film, films) {
//            var initView = function initView() {
//                FilmsService.getFilms().then(
//                        function () {
//                            $scope.films = FilmsService.films;
//                        },
//                        function (error) {
//                            $scope.films = [];
//                        }
//                )

//            }
            var initView = function () {
                $scope.films = films;
            }
            $scope.$on('$ionicView.loaded', function (event, data) {
                initView();
            });
        });



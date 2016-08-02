angular.module('FilmsModule')

        .controller('FilmDetailsController', function ($scope, Film) {
        var initView = function () {
        $scope.film = Film.build({"Title": "The Martian", "Year": "2015", "Rated": "PG-13", "Released": "02 Oct 2015", "Runtime": "144 min", "Genre": "Adventure, Drama, Sci-Fi", "Director": "Ridley Scott", "Writer": "Drew Goddard (screenplay), Andy Weir (book)", "Actors": "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels", "Plot": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.", "Language": "English, Mandarin", "Country": "USA, UK", "Awards": "Nominated for 7 Oscars. Another 34 wins & 168 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg", "Metascore": "80", "imdbRating": "8.1", "imdbVotes": "467,360", "imdbID": "tt3659388", "Type": "movie", "Response": "True"});
        }

        $scope.$on('$ionicView.loaded', function(event, data){
        initView();
        });
        })



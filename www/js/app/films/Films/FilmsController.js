angular.module('FilmsModule')

        .controller('FilmsController', function ($scope, Film) {

        var initView = function initView() {
        var film1 = Film.build({"Title": "The Martian", "Year": "2015", "Rated": "PG-13", "Released": "02 Oct 2015", "Runtime": "144 min", "Genre": "Adventure, Drama, Sci-Fi", "Director": "Ridley Scott", "Writer": "Drew Goddard (screenplay), Andy Weir (book)", "Actors": "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels", "Plot": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.", "Language": "English, Mandarin", "Country": "USA, UK", "Awards": "Nominated for 7 Oscars. Another 34 wins & 168 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg", "Metascore": "80", "imdbRating": "8.1", "imdbVotes": "467,360", "imdbID": "tt3659388", "Type": "movie", "Response": "True"});
                var film2 = Film.build({"Title": "Interstellar", "Year": "2014", "Rated": "PG-13", "Released": "07 Nov 2014", "Runtime": "169 min", "Genre": "Adventure, Drama, Sci-Fi", "Director": "Christopher Nolan", "Writer": "Jonathan Nolan, Christopher Nolan", "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow", "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", "Language": "English", "Country": "USA, UK", "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg", "Metascore": "74", "imdbRating": "8.6", "imdbVotes": "923,364", "imdbID": "tt0816692", "Type": "movie", "Response": "True"});
                $scope.films = [film1, film2];
        }
        $scope.$on('$ionicView.loaded', function(event, data){
        initView();
        });
        });



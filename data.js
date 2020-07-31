function MovieApi() {

    let  movie = null
    let movies = [
        {
            title: 'Ladies Do It',
            genre: "comic"
        },
        {
            title: 'Silicon valley',
            genre: "Tech"
        },
        {
            title: 'Men Who Made America',
            genre: "discoveries"
        },

        {
            title: 'The founder',
            genre: "Tech"
        },
        {
            title: 'wolf of wall street',
            genre: "finance"
        },
        {
            title: 'Pirates of Silicon valley',
            genre: "Tech"
        }
    ]

    return {
        searchMovies: function(searchString) {
            let title, genre = searchString.toLowerCase()
            movies = movies.filter((m) => (m.title.toLowerCase() == title || m.genre.toLowerCase() == genre))
            return movies
        },

        getAllMovies: function() {
            return movies
        },

    }
}

let source1 = new MovieApi()

// console.log(source1.searchMovies("Tech"));
// console.log(source.getMovieByTitle("The founder"))
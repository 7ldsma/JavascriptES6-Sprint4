// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    let result = array.map((movie) => movie.director);
    return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
    let moviesDirectors = array.filter((movie) => movie.director == director);
    return moviesDirectors;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
    let moviesDir = array.filter((movie) => movie.director == director);

    let total = moviesDir.reduce((suma, movie) => {
        suma += movie.score;
        return suma;
    }, 0);

    let avgMov = (total / moviesDir.length);
    avgMov.toFixed(2);
    return avgMov;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    const orderByTitle = array.map((movie) => movie.title);
    orderByTitle.sort();
    const veitePrimeros = orderByTitle.slice(0, 20);
    return veitePrimeros;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
    const orderByYearnTitle = array.map(({ title, year }) => ({ title, year }));

    orderByYearnTitle.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        }
    });

    return orderByYearnTitle;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
    const movGenre = array.filter((movie) => movie.genre == genre);

    const moviesGenre = movGenre.filter((movie) => movie.score !== '');

    const sumOfMovies = moviesGenre.reduce((suma, movie) => {
        suma += movie.score;
        return suma;
    }, 0);

    let averageOfMovies = (sumOfMovies / moviesGenre.length);
    averageOfMovies.toFixed(2);

    return averageOfMovies;

}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
    let peliculas = array.map((movie) => {
        const partes = movie.duration.split('h');

        let durMinutos = parseInt(partes[0]) * 60;

        if (partes[1]) {
            durMinutos += parseInt(partes[1]);
        }
        console.log(durMinutos);
        return {
            ...movie,
            duration: durMinutos,
        };

    });
    console.log(peliculas);

    return peliculas;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
    const bestByYear = array.filter((movie) => movie.year == year);

    let bestMov = bestByYear.reduce((max, movie) => {
        if (movie.score > max) {
            return movie.score;
        } else {
            return max;
        }
    }, 0);

    const bestMovies = bestByYear.filter((movie) => movie.score === bestMov);

    return bestMovies;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    };
}
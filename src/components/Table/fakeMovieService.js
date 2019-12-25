import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    name: "Alen",
    phone: "+919677257123",
    service: "Dentist appointment",
    booking_date: "05/02/2019",
    amount: "$100",
    status:"Paid"
  },
  {
    name: "Alex",
    phone: "+919845257123",
    service: "Dentist appointment",
    booking_date: "16/10/2019",
    amount: "$85",
    status:"Paid"
  },
  {
    name: "Brittan",
    phone: "+918877257223",
    service: "Dentist appointment",
    booking_date: "01/05/2019",
    amount: "$300",
    status:"Paid"
  },
  {
    name: "Zen",
    phone: "+917255687871",
    service: "Dentist appointment",
    booking_date: "05/02/2019",
    amount: "$230",
    status:"Paid"
  },
  {
    name: "Jane",
    phone: "+919710644623",
    service: "Dentist appointment",
    booking_date: "02/03/2019",
    amount: "$120",
    status:"Paid"
  },
  {
    name: "Jake",
    phone: "+918989562312",
    service: "Dentist appointment",
    booking_date: "18/07/2019",
    amount: "$99",
    status:"Paid"
  },
  {
    name: "David",
    phone: "+917255681456",
    service: "Dentist appointment",
    booking_date: "03/04/2019",
    amount: "$200",
    status:"Paid"
  },
  {
    name: "Richard",
    phone: "+919234568971",
    service: "Dentist appointment",
    booking_date: "23/09/2019",
    amount: "$150",
    status:"Paid"
  },
  {
    name: "Xavier",
    phone: "+917255447871",
    service: "Dentist appointment",
    booking_date: "05/11/2019",
    amount: "$30",
    status:"Paid"
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}

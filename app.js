const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const handler = (req, res) => {
  res.send("Welcome to my favorite movie List");
};

app.get("/", handler);

const favoriteMovies = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", favoriteMovies);

const movieById = (req, res) => {
  if (req.params.id -1 <= movies.length) {
    res.status(200).json(movies[req.params.id]);
 } else {
    res.status(404).send("Not Found");
  }
};

app.get("/api/movies/:id", movieById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

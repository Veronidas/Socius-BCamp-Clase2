$(document).ready(function () {});

function getRandomMovie() {
  $.ajax({
    url: "https://www.codigo-alfa.cl/aglo/Tester/peliculaAleatoria",
    method: "GET",
    success: function (data) {
      $("#randomMovieResult").html("<h3>" + data.pelicula.title + "<h3>");
      console.log(data.pelicula.title);
    },
  });
}

$.ajax({
  url: "https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas",
  method: "GET",
  success: function (data) {
    $("#selectMovie").html(
      data.peliculas.map(
        (m) => '<option value="' + m.id + '">' + m.title + "</option>"
      )
    );
  },
});

getJustOneMovie = () => {
  $("#selectMovie").on("change", function () {
    console.log(this.value);
  });
};

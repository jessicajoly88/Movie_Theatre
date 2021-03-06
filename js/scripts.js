function Movie(name, startTime) {
  this.name = name;
  this.startTime = startTime;
  this.ticketPrice = 10;
}

Movie.prototype.showName = function() {
  return this.name;
}

Movie.prototype.seniorTicketPrice = function() {
  return this.ticketPrice - 2;
}

Movie.prototype.kidTicketPrice = function() {
  return this.ticketPrice - 5;
}

Movie.prototype.matineeTicketPrice = function() {
  return this.ticketPrice -6;
}

var movieList = []
var newMovie1 = new Movie ("Runaway Bride", "6pm");
var newMovie2 = new Movie ("Notting Hill", "9pm");
var newMovie3 = new Movie ("Pretty Woman", "7pm")
var newMovie4 = new Movie ("Erin Brockovich","4pm");
var newMovie5 = new Movie ("My Best Friend's Wedding","4pm");
movieList.push(newMovie1, newMovie2, newMovie3, newMovie4, newMovie5);

$(document).ready(function() {
  $("#show-movies").show();
  $("show-movies h2").text("");
  $("#tickets").hide();
  movieList.forEach(function(movie) {
    $("ul#movies").append("<li class = 'movie'>" + movie.showName() + "</li>");
    $(".movie").last().click(function() {
      $("#show-movie-info").show();
      $("#ticket-price").hide();
      $("#tickets").show();
      $("#show-movie-info").append("<li>" + movie.showName() + "</li>" + movie.startTime + "<br>" + "$" + movie.ticketPrice);
      $("form.ticket-number").submit(function(event) {
        event.preventDefault();
        $("#ticket-price").show();

        var inputtedAmount = $(this).find("input.ticket-numbers").val();
        var inputtedTicket = $("select#category").val();

        if (inputtedTicket === "senior") {
          var ticketNumber = parseInt(inputtedAmount);
          var total = movie.seniorTicketPrice();
          var finalAmount = total * ticketNumber;
          $("#ticket-price").text("Total Amount" + " $" + finalAmount);
        }
        else if (inputtedTicket === "kid") {
          var ticketNumber = parseInt(inputtedAmount);
          var total = movie.kidTicketPrice();
          var finalAmount = total * ticketNumber;
          $("#ticket-price").text("Total Amount" + " $" + finalAmount);
        }
        else if (inputtedTicket === "matinee") {
          var ticketNumber = parseInt(inputtedAmount);
          var total = movie.matineeTicketPrice();
          var finalAmount = total * ticketNumber;
          $("#ticket-price").text("Total Amount" + " $" + finalAmount);
        }

      });
    });
  });

});

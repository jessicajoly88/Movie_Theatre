function Movie(name, startTime) {
  this.name = name;
  this.startTime = startTime;
  this.ticketPrice = 10;
}

Movie.prototype.seniorTicketPrice = function() {
  return this.ticketPrice - 2;
}

describe('Movie', function() {
  it("creates a new movie", function() {
    var testMovie = new Movie("Mad Max", "6pm");
    expect(testMovie.name).to.equal("Mad Max");
    expect(testMovie.startTime).to.equal("6pm");
  });

   it("returns reduced movie price for seniors", function() {
     var testMovie = new Movie("Mad Max", "6pm");
     expect(testMovie.name).to.equal("Mad Max");
     expect(testMovie.startTime).to.equal("6pm");
     expect(testMovie.seniorTicketPrice()).to.equal(8);

   });

   it("returns reduced movie price for kids", function() {
     var testMovie = new Movie("Dinner for Shmucks", "6pm");
     expect(testMovie.name).to.equal("Dinner for Shmucks");
     expect(testMovie.startTime).to.equal("6pm");
     expect(testMovie.kidTicketPrice()).to.equal(5);
   });
   
});

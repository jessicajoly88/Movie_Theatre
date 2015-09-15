describe('Movie', function() {
  it("creates a new movie", function() {
    var testMovie = new Movie("Mad Max", "6pm", "$10")
    expect(testMovie.name).to.equal("Mad Max");
    expect(testMovie.startTime).to.equal("6pm");
    expect(testMovie.price).to.equal("$10");
  });
});

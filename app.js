// to read JSON file

(async function logJSONData() {
  const response = await fetch("./data.json");
  const movie = await response.json();
  console.log(jsonData);

  // Getting user's input
  const genre = document.getElementById("movieGenre").value;
  const year = document.getElementById("movieYear").value;
  const language = document.getElementById("movieLang").value;
  const rating = document.getElementById("movieRating").value;


  // Filter the movie data based on the user's search criteria
  const results = data.filter(movie => {
    return (
      (genre === "" || movie.title.toLowerCase().includes(genre.toLowerCase())) ||
      (year === "" || movie.genre.toLowerCase().includes(year.toLowerCase())) ||
      (language === "" || movie.director.toLowerCase().includes(language.toLowerCase())) ||
      (rating === "" || movie.rating.toString().includes(year))
    );
  });

  // Display the search results in the table

  function displaySearchResults(results) {
    listElem.innerHTML = "";
    results.forEach(function (movie) {
      const li = document.createElement("li");
      const listItem = `
          <h2 class="title">${movie.genre}</h2>
          <div class="description">${movie.year}</div>
          <div class="description">${movie.language}</div>
          <div class="description">${movie.rating}</div>
      `;
      li.innerHTML = listItem;
      li.addEventListener("click", function () {
        loadRecipeDetails(movie);
      });
      listElem.appendChild(li);
    })
  }

  console.log(results);
 searchbtn.addEventListener = displaySearchResults(click, "result" ); 

})();

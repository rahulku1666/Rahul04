document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let title = document.getElementById('title').value;
    let year = document.getElementById('year').value;
    let genre = document.getElementById('genre').value;
    let director = document.getElementById('director').value;
    let cast = document.getElementById('cast').value;
    let rating = document.getElementById('rating').value;
    let runtime = document.getElementById('runtime').value;
    let dateWatched = document.getElementById('dateWatched').value;
    let personalRating = document.getElementById('personalRating').value;
    let review = document.getElementById('review').value;
    let format = document.getElementById('format').value;
    
    let movieList = document.getElementById('movieList');
    let movieItem = document.createElement('div');
    movieItem.className = 'movie';
    
    movieItem.innerHTML = `
        <h2>${title} (${year})</h2>
        <p><strong>Genre:</strong> ${genre}</p>
        <p><strong>Director:</strong> ${director}</p>
        <p><strong>Cast:</strong> ${cast}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Runtime:</strong> ${runtime} minutes</p>
        <p><strong>Date Watched:</strong> ${dateWatched}</p>
        <p><strong>Personal Rating:</strong> ${personalRating}/10</p>
        <p><strong>Review:</strong> ${review}</p>
        <p><strong>Format:</strong> ${format}</p>
    `;
    
    movieList.appendChild(movieItem);
    
    document.getElementById('movieForm').reset();
});

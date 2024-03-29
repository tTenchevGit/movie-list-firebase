document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('myButtonlist').addEventListener('click', () => {
        fetch('https://movie-list-88418-default-rtdb.europe-west1.firebasedatabase.app/movies.json')
            .then(response => response.json())
            .then(data => {
                
                const movieList = document.getElementById('myList');
                movieList.innerHTML ='';
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        const movieTitle = data[key].title; 
                        const li = document.createElement('ol');
                        li.textContent = movieTitle;
                        li.classList.add('slide-in');
                        const deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete';
                        deleteBtn.classList.add('delete');
                        deleteBtn.onclick = () => deleteMovie(key, li);
                        li.appendChild(deleteBtn);
                        movieList.appendChild(li);
                    }
                }
            })
            .catch(error => console.error('Error fetching movie:', error));
    });
});
// This function simulates adding a single new movie



function deleteMovie(movieKey, liElement) {
    fetch(`https://movie-list-88418-default-rtdb.europe-west1.firebasedatabase.app/movies/${movieKey}.json`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            console.log('Movie deleted successfully');
            liElement.remove(); // Remove the list item from the DOM
        } else {
            console.error('Failed to delete the movie');
        }
    })
    .catch(error => console.error('Error deleting movie:', error));
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addMovieButton').addEventListener('click', () => {
        const movieName = document.getElementById('newMovieName').value;
        if (movieName.trim() === '') {
            alert('Please enter a movie name.');
            return;
        }

        fetch('https://movie-list-88418-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
            method: 'POST', // Using POST to add the data
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: movieName // Assuming your database expects an object with a title property
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Movie added successfully!');
            document.getElementById('newMovieName').value = ''; // Clear input field after successful submission
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});

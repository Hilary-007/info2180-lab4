document.addEventListener('DOMContentLoaded', function() {

    const searchButton = document.getElementById('searchButton');
    const results = document.getElementById('results');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                result.textContent = 'An error occurred while fetching data.';
            });
    });

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            searchButton.click();
        }
});
});
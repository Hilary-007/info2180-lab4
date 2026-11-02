document.addEventListener('DOMContentLoaded', function() {
    console.log("Javascript is working!");

    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        fetch("superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});

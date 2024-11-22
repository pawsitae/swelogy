// Function to filter cards based on search input
/*document.getElementById('search-input').addEventListener('input', function() {
  var query = this.value.toLowerCase(); // Get search input and convert to lowercase
  var cards = document.querySelectorAll('.card'); // Select all card elements

  cards.forEach(function(card) {
    var cardText = card.textContent.toLowerCase(); // Get the text content of the card
    if (cardText.includes(query)) {
      card.style.display = 'block'; // Show the card if it matches the query
    } else {
      card.style.display = 'none'; // Hide the card if it does not match
    }
  });
});*/


document.getElementById('search-button').addEventListener('click', function() {
  console.log('Search button clicked');
});
document.addEventListener("DOMContentLoaded", function() {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');

  SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: searchResults,
    json: '{{ site.baseurl }}/search.json',
    searchResultTemplate: '<a href="{url}">{title}</a>',
    noResultsText: '<p>No results found</p>',
  });

  // Show results when typing
  searchInput.addEventListener('input', function() {
    if (searchInput.value.length > 0) {
      searchResults.style.display = 'flex';
    } else {
      searchResults.style.display = 'none';
    }
  });

  // Hide results when clicking outside
  document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
      searchResults.style.display = 'none';
    }
  });

  // Prevent form submission on enter
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  });
});

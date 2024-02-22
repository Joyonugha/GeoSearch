$(document).ready(function() {
    $('#search-btn').click(function() {
        const searchQuery = $('#search-input').val();
        if (searchQuery) {
            // Example API URL for searching countries
            const API_URL_1 = `https://api.example.com/countries?search=${searchQuery}&api_key=API_KEY_1`;
            
            // Example API URL for getting country details
            const API_URL_2 = `https://api.example.com/countries/details?country=${searchQuery}&api_key=API_KEY_2`;
            
            // Fetch country data
            $.ajax({
                url: API_URL_1,
                method: "GET",
                success: function(response) {
                    // Assume response contains an array of countries
                    if (response.length >  0) {
                        const country = response[0]; // Take the first result for simplicity
                        // Fetch and display detailed country information
                        $.ajax({
                            url: API_URL_2,
                            method: "GET",
                            success: function(detailResponse) {
                                $('#results').html(`
                                    <h2>${country.name}</h2>
                                    <p>Capital: ${detailResponse.capital}</p>
                                    <p>Population: ${detailResponse.population}</p>
                                    <p>Area: ${detailResponse.area} km²</p>
                                `);
                            },
                            error: function(error) {
                                console.error("Error fetching country details:", error);
                            }
                        });
                    } else {
                        $('#results').html('<p>No results found.</p>');
                    }
                },
                error: function(error) {
                    console.error("Error fetching countries:", error);
                }
            });
        }
    });
});
$(document).ready(function() {
    const API_KEY = "";
    const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY';";
    const FORECAST_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
    $('#search-btn').click(function() {
        const searchQuery = $('#search-input').val();
        if (searchQuery) {
            // Example API URL for searching countries
            const API_key = `6b6bcd5112mshda0fa28d640258cp123af2jsn6c8b9b64900d`;
            
            // Example API URL for getting country details
            const API_Key2 = `https://api.example.com/countries/details?country=${searchQuery}&api_key=API_KEY_2`;
            
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
document.addEventListener("DOMContentLoaded", function () {
document.getElementById('searchButton').addEventListener('click', function() {
    var searchInput = document.querySelector('.search-input').value;
    var searchService = new google.maps.places.PlacesService(document.createElement('div'));
    searchService.textSearch({
        query: searchInput,
    }, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            console.log(results); // Process the results here
            // Example: Display the first result's name
            if (results[0]) {
                console.log(results[0].name);
            }};
        });
    });
});

document.getElementById('savesearchButton').addEventListener('click', function() {
    var searchInput = document.querySelector('.search-input').value;
    var savedSearches = localStorage.getItem('savedSearches');
    savedSearches = savedSearches ? JSON.parse(savedSearches) : [];
    savedSearches.push(searchInput);
    localStorage.setItem('savedSearches', JSON.stringify(savedSearches));
    // Optionally, display the saved searches in your UI
});

// Initialize the map
// function initMap() {
//     // The location of the map
//     const defaultLocation = { lat: 40.748817, lng: -73.985428 }; // Example: New York City

//     // The map, centered at the default location
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 10,
//         center: defaultLocation,
//     });

//     // The marker, positioned at the default location
//     const marker = new google.maps.Marker({
//         position: defaultLocation,
//         map: map,
//     });

//     // Create the search box and link it to the UI element.
//     const input = document.getElementById("searchInput");
//     const searchBox = new google.maps.places.SearchBox(input);

//     // Bias the SearchBox results towards the current map's viewport.
//     map.addListener("bounds_changed", () => {
//         searchBox.setBounds(map.getBounds());
//     });

//     // Listen for the event fired when the user selects a prediction and retrieve
//     // more details for that place.
//     searchBox.addListener("places_changed", () => {
//         const places = searchBox.getPlaces();

//         if (places.length == 0) {
//             return;
//         }

//         // For each place, get the icon, name, and location.
//         const bounds = new google.maps.LatLngBounds();
//         places.forEach((place) => {
//             if (!place.geometry) {
//                 console.log("Returned place contains no geometry");
//                 return;
//             }

//             // Create a marker for each place.
//             marker.setPosition(place.geometry.location);

//             if (place.geometry.viewport) {
//                 // Only geocodes have viewport.
//                 bounds.union(place.geometry.viewport);
//             } else {
//                 bounds.extend(place.geometry.location);
//             }
//         });
//         map.fitBounds(bounds);

//         // Display the information of the selected place
//         displayPlaceInfo(places[0]);
//     });
// }

// // Display the information of the selected place
// function displayPlaceInfo(place) {
//     document.getElementById("location").textContent = place.formatted_address;
//     document.getElementById("lat").textContent = place.geometry.location.lat();
//     document.getElementById("lon").textContent = place.geometry.location.lng();
//     // Note: The postal code and country are not directly available from the place object.
//     // You might need to use a different API or additional processing to get this information.
// }

// // Load the Google Maps JavaScript API
// function loadScript() {
//     const script = document.createElement("script");
//     script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places";
//     script.async = true;
//     script.defer = true;
//     script.addEventListener("load", () => {
//         initMap();
//     });
//     document.head.appendChild(script);
// }

// window.onload = loadScript;



// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("form");
//     const searchInput = document.getElementById("search");
//     const resultsDiv = document.getElementById("results");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const searchTerm = searchInput.value;
//         // Replace "YOUR_API_KEY" with your actual API key
//         const googleApiKey = "AIzaSyDve5worgarDZDcV9Q0oaGox4MeK5GZfbU";
        
//         // Make an API request to Google Geocoding API
//         axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=${googleApiKey}`)
//             .then(response => {
//                 const data = response.data;
//                 const results = data.results;

//                 // Clear previous results
//                 resultsDiv.innerHTML = "";

//                 // Display results
//                 results.forEach(result => {
//                     const formattedAddress = result.formatted_address;
//                     const latitude = result.geometry.location.lat;
//                     const longitude = result.geometry.location.lng;
//                     const button = document.createElement("button");
//                     button.textContent = formattedAddress;
//                     button.classList.add("btn", "btn-primary", "mb-2");
//                     button.addEventListener("click", function() {
//                         // Handle button click, for example, display latitude and longitude
//                         alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
//                     });
//                     resultsDiv.appendChild(button);
//                 });
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//                 resultsDiv.innerHTML = "<p>Failed to fetch data</p>";
//             });
//     });
// });


































// // $(document).ready(function() {
// //     const API_KEY = "AIzaSyDve5worgarDZDcV9Q0oaGox4MeK5GZfbU";
// //     const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY';";
// //     const FORECAST_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
// //     $('#search-btn').click(function() {
// //         const searchQuery = $('#search-input').val();
// //         if (searchQuery) {
// //             // Example API URL for searching countries
// //             const API_key = `6b6bcd5112mshda0fa28d640258cp123af2jsn6c8b9b64900d`;
            
// //             // Example API URL for getting country details
// //             const API_Key2 = `https://api.example.com/countries/details?country=${searchQuery}&api_key=API_KEY_2`;
            
// //             // Fetch country data
// //             $.ajax({
// //                 url: API_URL_1,
// //                 method: "GET",
// //                 success: function(response) {
// //                     // Assume response contains an array of countries
// //                     if (response.length >  0) {
// //                         const country = response[0]; // Take the first result for simplicity
// //                         // Fetch and display detailed country information
// //                         $.ajax({
// //                             url: API_URL_2,
// //                             method: "GET",
// //                             success: function(detailResponse) {
// //                                 $('#results').html(`
// //                                     <h2>${country.name}</h2>
// //                                     <p>Capital: ${detailResponse.capital}</p>
// //                                     <p>Population: ${detailResponse.population}</p>
// //                                     <p>Area: ${detailResponse.area} km²</p>
// //                                 `);
// //                             },
// //                             error: function(error) {
// //                                 console.error("Error fetching country details:", error);
// //                             }
// //                         });
// //                     } else {
// //                         $('#results').html('<p>No results found.</p>');
// //                     }
// //                 },
// //                 error: function(error) {
// //                     console.error("Error fetching countries:", error);
// //                 }
// //             });
// //         }
// //     });
// // });
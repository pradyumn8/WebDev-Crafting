const div = document.getElementById('location');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(Location, handleError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        div.textContent = 'Geolocation is not supported by this browser.';
    }
});

function Location(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apiKey = '5738901d3815433cb8c7d0975dfdde66';
    const apiURL = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1`;

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); // Log coordinates

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the complete API response for debugging

            if (data.results && data.results.length > 0) {
                const components = data.results[0].components;
                const city = components.city || components.town || components.village || 'Unknown City';
                const country = components.country || 'Unknown Country';
                div.textContent = `Your current location: ${city}, ${country}`;
            } else {
                div.textContent = 'Unable to determine location.';
            }
        })
        .catch(error => console.error('Error fetching location information:', error));
}

function handleError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            div.textContent = 'User denied the request for Geolocation.';
            break;
        case error.POSITION_UNAVAILABLE:
            div.textContent = 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            div.textContent = 'The request to get user location timed out.';
            break;
        case error.UNKNOWN_ERROR:
            div.textContent = 'An unknown error occurred.';
            break;
    }
}
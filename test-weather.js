// Standalone script to test weather API fetch

// Replace with your actual city and API key for testing
const city = 'London';
const apiKey = '81f33ea96f8e39648762b895804454c0'; // <-- Paste your key here!

async function testWeather(city, apiKey) {
    if (!city) {
        console.error("City name is required");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`OpenWeather API error: ${response.status}`);
            console.error(errorText);
            return;
        }
        const data = await response.json();
        console.log('Weather data:', data);
    } catch (error) {
        console.error('Internal server error:', error);
    }
}

testWeather(city, apiKey);
function addToBody(text) {
  const p = document.createElement("p");
  p.textContent = text;
  document.body.appendChild(p);
}

// Map weather codes to readable text
const weatherDescriptions = {
  // Clear & Cloudy
  0: "☀️ Clear sky",
  1: "🌤️ Mainly clear",
  2: "⛅ Partly cloudy",
  3: "☁️ Overcast",

  // Fog
  45: "🌫️ Foggy",
  48: "🌫️ Depositing rime fog",

  // Drizzle
  51: "🌦️ Light drizzle",
  53: "🌦️ Moderate drizzle",
  55: "🌦️ Dense drizzle",
  56: "❄️ Light freezing drizzle",
  57: "❄️ Dense freezing drizzle",

  // Rain
  61: "🌧️ Slight rain",
  63: "🌧️ Moderate rain",
  65: "🌧️ Heavy rain",
  66: "❄️ Light freezing rain",
  67: "❄️ Heavy freezing rain",

  // Snow
  71: "❄️ Slight snow fall",
  73: "❄️ Moderate snow fall",
  75: "❄️ Heavy snow fall",
  77: "❄️ Snow grains",

  // Rain Showers
  80: "🚿 Slight rain showers",
  81: "🚿 Moderate rain showers",
  82: "🚿 Violent rain showers",

  // Snow Showers
  85: "❄️ Slight snow showers",
  86: "❄️ Heavy snow showers",

  // Thunderstorm
  95: "⛈️ Thunderstorm",
  96: "⛈️ Thunderstorm with slight hail",
  99: "⛈️ Thunderstorm with heavy hail"
};


async function getArlingtonWeather() {
  try {
    const lat = 38.88;
    const lon = -77.10;

    // KEEPING YOUR ORIGINAL LINK
   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit&wind_speed_unit=mph`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    // KEEPING YOUR ORIGINAL VARIABLE NAMES
    const temp = data.current_weather.temperature;
    const wind = data.current_weather.windspeed;
    const direction = data.current_weather.winddirection;
    const code = data.current_weather.weathercode;
    
    const description = weatherDescriptions[code] || "Conditions varying";
    
    // UPDATING THE HTML IDS (Matches the index.html below)
    document.getElementById("description").textContent = description;
    document.getElementById("temp").textContent = `${Math.round(temp)}°F`;
    document.getElementById("wind").textContent = `${wind} mph`;
    document.getElementById("direction").textContent = `${direction}°`;
    
  } catch (error) {
    if(document.getElementById("description")) {
        document.getElementById("description").textContent = "Link or connection error!";
    }
  }

}

getArlingtonWeather();

setInterval(getArlingtonWeather, 600000);
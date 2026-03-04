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
  const UI = {
    desc: document.getElementById("description"),
    temp: document.getElementById("temp"),
    wind: document.getElementById("wind"),
    dir: document.getElementById("direction"),
    dot: document.getElementById("status-dot"),
    feals: document.getElementById("feels-like")
  };

  try {
    const lat = 38.88;
    const lon = -77.10;

    // THE CORRECTED URL (Notice 'current=...')
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,is_day,apparent_temperature&&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    // UPDATED VARIABLE PATHS (To match the new URL)
    const current = data.current; 
    const temp = current.temperature_2m;
    const wind = current.wind_speed_10m;
    const direction = current.wind_direction_10m;
    const code = current.weather_code;
    const isDay = current.is_day; // 1 = Day, 0 = Night
    const feals = current.apparent_temperature;
    const maxTemps = data.daily.temperature_2m_max; // [72, 68, 75, ...]
    const minTemps = data.daily.temperature_2m_min; // [55, 52, 58, ...]

    // Update UI text
    UI.desc.textContent = weatherDescriptions[code] || "Conditions varying";
    UI.temp.textContent = `${Math.round(temp)}°F`;
    UI.wind.textContent = `${Math.round(wind)} mph`;
    UI.dir.textContent = `${direction}°`;
    UI.feals.textContent = `${Math.round(feals)}°F`;

        // logic: 1 = Day, 0 = Night
if (isDay === 0) {
        // NIGHT: Deep space blue to midnight black
        document.body.style.background = "linear-gradient(180deg, #1e293b 0%, #0f172a 40%, #020617 100%)";
        document.body.style.color = "#f8fafc"; // Off-white for easy reading
    } else {
        // SUNRISE DAY: Deep sky blue -> Soft Peach -> Golden Horizon
        document.body.style.background = "linear-gradient(180deg, #075985 0%, #fbcfe8 45%, #ffedd5 70%, #fdba74 100%)";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.color = "#0f172a"; 
    }
    
    UI.dot.style.backgroundColor = "#22c55e"; // Success green

    // 1. Get the forecast container
const forecastList = document.getElementById("forecast-list");
forecastList.innerHTML = ""; // Clear it

// 2. Loop through the data Open-Meteo already gave you
data.daily.time.forEach((dateString, i) => {
    // Get the Day Name (Mon, Tue, etc)
    const date = new Date(dateString);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' });
    
    // Get the emoji from your weatherDescriptions map
    const code = data.daily.weather_code[i];
    const icon = (weatherDescriptions[code] || "☀️").split(' ')[0]; // Just the emoji

    // 3. Add to the UI
    forecastList.innerHTML += `
        <div class="day-item">
            <span class="day-name">${dayName}</span>
            <span class="day-icon">${icon}</span>
            <span class="day-high"> high ${Math.round(maxTemps[i])}°</span>
            <span class="day-low">low ${Math.round(minTemps[i])}°</span>
        </div>
    `;
});
    
  } catch (error) {
    if(UI.desc) UI.desc.textContent = "Connection error!";
    UI.dot.style.backgroundColor = "#ef4444"; // Error red
  }
}
// Initial call and 10-minute interval
getArlingtonWeather();
setInterval(getArlingtonWeather, 600000);
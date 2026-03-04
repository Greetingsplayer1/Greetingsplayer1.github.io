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
    dot: document.getElementById("status-dot")
  };

  try {
    const lat = 38.88;
    const lon = -77.10;

    // THE CORRECTED URL (Notice 'current=...')
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,is_day,apparent_temperature&temperature_unit=fahrenheit&wind_speed_unit=mph`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    // UPDATED VARIABLE PATHS (To match the new URL)
    const current = data.current; 
    const temp = current.temperature_2m;
    const wind = current.wind_speed_10m;
    const direction = current.wind_direction_10m;
    const code = current.weather_code;
    const isDay = current.is_day; // 1 = Day, 0 = Night

    // Update UI text
    UI.desc.textContent = weatherDescriptions[code] || "Conditions varying";
    UI.temp.textContent = `${Math.round(temp)}°F`;
    UI.wind.textContent = `${Math.round(wind)} mph`;
    UI.dir.textContent = `${direction}°`;

    // BONUS: Update background based on Day/Night
    if (isDay === 0) {
        document.body.style.background = "linear-gradient(135deg, #020617 0%, #0f172a 100%)"; // Darker Night Mode
    } else {
        document.body.style.background = "linear-gradient(0deg, #0a223aff 0%, #195bbcff 90%)"; // Original Professional Mode
    }
    
    UI.dot.style.backgroundColor = "#22c55e"; // Success green

  } catch (error) {
    if(UI.desc) UI.desc.textContent = "Connection error!";
    UI.dot.style.backgroundColor = "#ef4444"; // Error red
  }
}

// Initial call and 10-minute interval
getArlingtonWeather();
setInterval(getArlingtonWeather, 600000);
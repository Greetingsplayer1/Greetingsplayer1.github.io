function addToBody(text) {
  const p = document.createElement("p");
  p.textContent = text;
  document.body.appendChild(p);
}

// THE FIX: You must include the full path and coordinates in the quotes
const url = "https://api.open-meteo.com";

fetch(url)
  .then(response => {
    if (!response.ok) throw new Error("Server error: " + response.status);
    return response.json();
  })
  .then(data => {
    const temp = data.current_weather.temperature;
    addToBody("Success! It is " + temp + "°C in Virginia.");
  })
  .catch(error => {
    addToBody("Failed: " + error.message);
  });

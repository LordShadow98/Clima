// app.js

const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

const getWeatherData = async (city) => {
  try {
    const apiKey = '999d54a97f49d0f57ae4e7af8870e4d4';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(apiUrl);

    const weatherData = {
      temperatura: `${response.data.main.temp} °C`,
      humedad: `${response.data.main.humidity}%`,
      presión: `${response.data.main.pressure} hPa`,
      viento: `${response.data.wind.speed} km/h`,
    };

    return weatherData;
  } catch (error) {
    throw new Error('Error al obtener datos del clima desde la API externa');
  }
};

const consultarClima = async (city) => {
  try {
    const weatherData = await getWeatherData(city);

    return `
      <h2>Información del Clima para ${city}</h2>
      <p>Temperatura: ${weatherData.temperatura}</p>
      <p>Humedad: ${weatherData.humedad}</p>
      <p>Presión Atmosférica: ${weatherData.presión}</p>
      <p>Viento: ${weatherData.viento}</p>
    `;
  } catch (error) {
    console.error('Error al obtener la información del clima:', error);
    throw new Error('Error al obtener la información del clima');
  }
};

app.get('/api/weather/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const weatherInfo = await consultarClima(city);
    res.send(weatherInfo);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la información del clima' });
  }
});

app.get('/weather', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/weather', async (req, res) => {
  try {
    const { city } = req.body;

    if (!city) {
      return res.status(400).send('Por favor, ingrese el nombre de la ciudad.');
    }

    const weatherInfo = await consultarClima(city);

    res.send(weatherInfo);
  } catch (error) {
    console.error('Error al obtener la información del clima:', error);
    res.status(500).send('Error al obtener la información del clima');
  }
});

app.listen(PORT, () => {
  console.log(`La aplicación está escuchando en http://localhost:${PORT}/api/weather`);
});

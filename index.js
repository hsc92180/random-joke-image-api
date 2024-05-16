const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8000;
const JOKE_API_URL = "https://api.api-ninjas.com/v1/jokes";
const IMAGE_API_URL = "https://api.api-ninjas.com/v1/randomimage";
const API_KEY = "K93wJGQmYcWrO/9wiyq36A==6NwQ2sJSPnxQjxnd";

app.get("/api/v1/random-joke", async (req, res) => {
    try {
        const response = await axios.get(JOKE_API_URL, {
            headers: {
                'x-api-key': API_KEY,
            }
        });
        res.json({
            success: true,
            joke: response.data[0].joke,
        });
    } catch (error) {
        console.error("Error fetching joke:", error);
        res.status(500).json({ success: false, message: "Failed to fetch joke" });
    }
});

app.get("/api/v1/random-image", async (req, res) => {
    const { category, width = 640, height = 480 } = req.query;
    try {
        const response = await axios.get(IMAGE_API_URL, {
            params: { category, width, height },
            headers: {
                'x-api-key': API_KEY,
                'Accept': 'image/jpg',
            },
            responseType: 'arraybuffer'
        });
        const base64Image = Buffer.from(response.data, 'binary').toString('base64');
        res.json({
            success: true,
            image: `data:image/jpeg;base64,${base64Image}`,
        });
    } catch (error) {
        console.error("Error fetching image:", error);
        res.status(500).json({ success: false, message: "Failed to fetch image" });
    }
});

app.get("/api/v1/random", async (req, res) => {
    const { category, width = 640, height = 480 } = req.query;
    try {
        const jokeResponse = await axios.get(JOKE_API_URL, {
            headers: {
                'x-api-key': API_KEY,
            }
        });
        const imageResponse = await axios.get(IMAGE_API_URL, {
            params: { category, width, height },
            headers: {
                'x-api-key': API_KEY,
                'Accept': 'image/jpg',
            },
            responseType: 'arraybuffer'
        });
        const base64Image = Buffer.from(imageResponse.data, 'binary').toString('base64');
        res.json({
            success: true,
            joke: jokeResponse.data[0].joke,
            image: `data:image/jpeg;base64,${base64Image}`,
        });
    } catch (error) {
        console.error("Error fetching joke and image:", error);
        res.status(500).json({ success: false, message: "Failed to fetch joke and image" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

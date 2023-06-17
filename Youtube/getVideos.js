const axios = require('axios');
require("dotenv").config({ path: __dirname + "/.env" });

// Function to retrieve videos from YouTube API
async function getVideos() {

    const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search';
    const apiKey = process.env.YOUTUBE_API_KEY;
    const accessToken = process.env.YOUTUBE_ACCESS_TOKEN;

    const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
    };

    const params = {
        part: 'snippet',
        forMine: true,
        maxResults: 100,
        type: 'video',
        key: apiKey
    };

    try {
        const response = await axios.get(apiUrl, { headers, params });

        // Extract video data from API response
        const Youtube_Videos = response.data.items.map(v => {
            try {
                const title = v.snippet.title;
                const url = `https://www.youtube.com/watch?v=${v.id.videoId}`;
                return {
                    url,
                    title
                };
            } catch (error) {
                return null;
            }
        });

        // Remove undefined values from the video list
        const filteredVideos = Youtube_Videos.filter(el => el !== null);

        return filteredVideos;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            throw new Error('Please run "npm run auth" to get a new access token');
        } else {
            console.error(error);
            throw error;
        }
    }
}

module.exports = {
    getVideos
};

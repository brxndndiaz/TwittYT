// Import necessary modules
const { twitterClient } = require("./Twitter/TwitterClient");
const { getVideos } = require("./Youtube/getVideos");
const CronJob = require("cron").CronJob;

// Create a CronJob to run the script at the specified time (5:00 PM UTC)
const cronTweet = new CronJob("0 17 * * *", async () => {

    try {
        // Retrieve a list of videos
        const videos = await getVideos();
        
        // Select a random video from the list
        const video = videos[Math.floor(Math.random() * videos.length)];

        // Compose the Twitter caption with the video URL
        const twitterCaption = `Here's a random video I posted!\n${video.url}`;

        console.log("[⚙️] Sending Tweet...");
        console.log(twitterCaption);
        // Tweet the caption using the Twitter client
        await twitterClient.v2.tweet(twitterCaption);

        console.log("[✅] Tweeted successfully!");

    } catch (e) {
        console.log(e);
    }
});

// Start the CronJob
cronTweet.start();

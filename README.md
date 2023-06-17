# TwittYT

TwittYT is a Node.js project that posts random YouTube videos on Twitter at a scheduled interval. 
It uses the YouTube Data API and the Twitter API to fetch videos and post tweets. 
You can configure the project to run at specific times and customize the content to suit your needs.

## Prerequisites

To run the TwittYT project, make sure you have the following prerequisites installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- YouTube Data API key
- Twitter API key, secret, access token, and access token secret

## Installation

1. Clone the repository:
   git clone https://github.com/brxndndiaz/TwittYT.git

2. Navigate to the project directory:
   cd TwittYT

3. Install the dependencies:
   npm install

4. Set up the environment variables:
   - Create a `.env` file in the project directory.
   - Add the following environment variables to the `.env` file and replace the placeholder values with your actual API credentials:

## Configuration

You can configure the schedule and behavior of the TwittYT project by modifying the code.

- To change the posting schedule, open the `index.js` file and locate the `CronJob` initialization code. 
  Update the Cron expression to set the desired interval. For example, to run every 12 hours, use "0 */12 * * *". Refer to the Cron syntax documentation for more information.

- Customize the tweet content in the `index.js` file. The `twitterCaption` variable holds the text that will be posted along with the YouTube video URL. You can modify it according to your preferences.

## Usage

Once you have completed the installation and configuration steps, you can run the TwittYT project.

node index.js

The script will start running and will post a random YouTube video on Twitter based on the configured schedule.

## Contributing

Contributions to TwittYT are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

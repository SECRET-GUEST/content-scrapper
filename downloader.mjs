import fs from 'fs/promises';
import path from 'path';
import { createClient } from 'pexels';
import fetch from 'node-fetch';

async function getApiKey() {
    try {
        const apiKey = await fs.readFile('apikey.txt', 'utf8');
        return apiKey.trim();
    } catch (error) {
        console.error('Error reading apikey.txt:', error);
        process.exit(1);
    }
}

async function getClient() {
    const apiKey = await getApiKey();
    return createClient(apiKey);
}

// Function to download a video
async function downloadVideo(url, path) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    await fs.writeFile(path, Buffer.from(buffer));
}

// Load the keywords from the JSON file
import keywordsData from './keywords.json' assert { type: 'json' };

// Iterate through the keywords data to search for and download videos for each keyword
(async () => {
    const client = await getClient();
    for (const scene in keywordsData) {
        for (const point in keywordsData[scene]) {
            for (const subPoint in keywordsData[scene][point]) {
                for (const keyword of keywordsData[scene][point][subPoint]) {
                    // Create directory structure
                    const dirPath = path.join(process.cwd(), scene, point, subPoint);
                    await fs.mkdir(dirPath, { recursive: true });

                    // Search for videos using the Pexels API
                    const searchResults = await client.videos.search({ query: keyword, per_page: 5 });
                    for (const video of searchResults.videos) {
                        // Get the video file URL
                        const videoUrl = video.video_files[0].link;
                        // Download the video
                        const videoFilename = `${video.id}.mp4`;
                        const videoPath = path.join(dirPath, videoFilename);
                        await downloadVideo(videoUrl, videoPath);
                    }
                }
            }
        }
    }
})();

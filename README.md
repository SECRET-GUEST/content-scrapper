```
██████╗ ███████╗██╗  ██╗███████╗██╗         ██╗   ██╗██╗██████╗ ███████╗ ██████╗     ███████╗ ██████╗██████╗  █████╗ ██████╗ ██████╗ ███████╗██████╗ 
██╔══██╗██╔════╝╚██╗██╔╝██╔════╝██║         ██║   ██║██║██╔══██╗██╔════╝██╔═══██╗    ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗
██████╔╝█████╗   ╚███╔╝ █████╗  ██║         ██║   ██║██║██║  ██║█████╗  ██║   ██║    ███████╗██║     ██████╔╝███████║██████╔╝██████╔╝█████╗  ██████╔╝
██╔═══╝ ██╔══╝   ██╔██╗ ██╔══╝  ██║         ╚██╗ ██╔╝██║██║  ██║██╔══╝  ██║   ██║    ╚════██║██║     ██╔══██╗██╔══██║██╔═══╝ ██╔═══╝ ██╔══╝  ██╔══██╗
██║     ███████╗██╔╝ ██╗███████╗███████╗     ╚████╔╝ ██║██████╔╝███████╗╚██████╔╝    ███████║╚██████╗██║  ██║██║  ██║██║     ██║     ███████╗██║  ██║
╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝      ╚═══╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝     ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝  ╚═╝
                                                                                                                                                     
```
![Javascript](https://img.shields.io/badge/JAVASCRIPT-yellow)
![ALPHA](https://img.shields.io/badge/ALPHA-red) 
![LINUX](https://img.shields.io/badge/Debian-LINUX-orange)


# Pexels Video Downloader 🎥

This script facilitates the downloading of videos from Pexels based on keywords supplied in a JSON file. It utilizes the Pexels API to search for videos based on specific keywords, and downloads them to a structured directory.

---
---
---

## 📋 Table of Contents

- [Pexels Video Downloader 🎥](#pexels-video-downloader-)
  - [📋 Table of Contents](#-table-of-contents)
  - [🌟 Features](#-features)
  - [🔍 Prerequisites](#-prerequisites)
  - [📜 License](#-license)
  - [❓ Support \& Questions](#-support--questions)
  - [📥 Installation](#-installation)
  - [🖥️ Usage](#️-usage)
   
## 🌟 Features

- Automated video downloading from Pexels.
- Structured directory creation based on keywords.
- Customizable search and download parameters.

## 🔍 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14.0.0 or newer)
- A Pexels API Key

Ensure you adhere to Pexels API usage guidelines, notably:
- Display a visible link back to Pexels.
- Mention the name of the photographers whenever possible.
- Avoid replicating the core functionality of Pexels.
- Abide by the rate limits of 200 requests per hour and 20,000 requests per month (contact Pexels to request a higher limit if necessary).
- [Pexels API Documentation](https://www.pexels.com/api/documentation/)

## 📜 License

This repository is released under the [MIT License](LICENSE). Please see the `LICENSE` file for more information.

## ❓ Support & Questions

If you have any questions or need support, please feel free to open an issue, a new discussion, or join my twitter.

## 📥 Installation

1. Clone this repository to your local machine.
```bash
git clone -b pexel_video https://github.com/SECRET-GUEST/content-scrapper.git
```
2. Navigate to the project directory.
```bash
cd pexel_video
```
3. Install the necessary Node.js packages.
```bash
npm install node-fetch pexels
```
4. Copy your Pexels API key into a file named `apikey.txt` in the project root.
```bash
echo "your-api-key-here" > apikey.txt
```
5. Run the script with Node.js.
```bash
node downloader.mjs
```

## 🖥️ Usage

1. Prepare a JSON file with the keywords you want to use for video searching. Here's an example `keywords.json` file:

```json
{
    "1": {
        "a": {
            "i": ["beach", "ocean waves", "seashore"],
            "ii": ["sunset beach", "palm trees", "tropical"]
        },
        "b": {
            "i": ["forest", "wildlife", "nature"],
            "ii": ["birds", "trees", "flowers"]
        }
    }
}
```
In this structure, each keyword under "i" or "ii" will be used to search for videos on Pexels.

2. Ensure the JSON file is in the same directory as the script, or update the `KEYWORDS_FILE_PATH` constant in the script to point to your JSON file.

3. Run the script as per the installation instructions. The script will create directories and subdirectories based on the structure of the JSON file, search for videos using the keywords, and download the videos into the corresponding directories.

Note: Ensure you remain within the rate limits set by Pexels for the API usage to avoid any disruptions in access.

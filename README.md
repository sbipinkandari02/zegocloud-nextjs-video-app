# zegocloud-nextjs-video-app
ZEGOCLOUD Next.js Video App

A real-time video calling and conferencing application built with ZEGOCLOUD and Next.js.
This project demonstrates how to integrate ZEGOCLOUD’s Web SDK into a Next.js app for high-quality, low-latency video calls with simple APIs.

🚀 Features

🔹 Real-time 1:1 video calls and group video conferencing

🔹 Cross-platform compatibility (Web, Mobile browser support)

🔹 High-quality audio & video powered by ZEGOCLOUD

🔹 Room-based joining (create or join rooms by ID)

🔹 Lightweight Next.js integration

🔹 Easy to extend for chat, screen-sharing, or recording

🛠️ Tech Stack

Next.js – React framework for server-side rendering

ZEGOCLOUD Web SDK – Real-time video & audio communication

TailwindCSS (optional, for styling)

📦 Installation

Clone the repository

git clone https://github.com/your-username/zegocloud-nextjs-video-app.git
cd zegocloud-nextjs-video-app


Install dependencies

yarn install
# or
npm install


Add environment variables in .env.local:

NEXT_PUBLIC_ZEGO_APP_ID=your_zegocloud_app_id
NEXT_PUBLIC_ZEGO_SERVER_SECRET=your_zegocloud_server_secret


🔑 You can get these from ZEGOCLOUD Console.

Run the development server:

yarn dev
# or
npm run dev


The app will be available at http://localhost:3000.

🎥 Usage

Open the app in your browser

Enter a room ID (any string) and your username

Click Join Room to start a video call

Share the room ID with others so they can join the same room

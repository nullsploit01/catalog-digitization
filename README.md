<div align="center">
  <h3 align="center">Catalog Digitization</h3>
  <p align="center">
    A web-app made for <a href="https://hack2skill.com/build-for-bharat-hackathon-ondc-google-cloud"><strong>Build for Bharat Hackathon</strong></a>
</div>

## About The Project

This web-app showcases a method to digitize and enhance the process of creating a ecommerce catalog for sellers. It uses AI to get user's voice input and fill up product details.

### Built With

- React JS
- Express JS
- Open AI

## Getting Started

### Prerequisites

- [Node JS](https://nodejs.org/)

### Local setup

1. Get API key from [Open AI](https://openai.com)
2. Clone the repo
   ```sh
   git clone https://github.com/nullsploit01/catalog-digitization.git
   ```
3. Setup API Server

   - Install dependencies

   ```sh
   cd catalog-digitization
   npm install
   ```

   - Create a `.env.local` file at root of project and add values for following keys

   ```
   OPENAI_shAPI_KEY=YOUR_API_KEY
   ALLOWED_ORIGIN=UI_URL
   ```

   - Start API server

   ```sh
   npm run dev
   ```

4. Setup UI Server
   - Install dependencies
   ```sh
   cd ui
   npm install
   npm run dev
   ```
   - Create a `.env.local` file in ui folder and add values for following keys
   ```
   VITE_API_URL=API_URL
   ```
   - Start UI server
   ```sh
   npm run dev
   ```

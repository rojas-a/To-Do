# To-Do App in React

A simple To-Do application built with React. Great for beginners learning React components, forms, and event handlers.

## Prerequisites

Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) (v12 or higher recommended)
- npm (comes bundled with Node.js)

To verify your installation, run:

```bash
node -v
npm -v
```

## Getting Started

These instructions work on both **macOS** and **Windows**.

### 1. Clone the repository

```bash
git clone https://github.com/abarna1908/To-Do-App-in-React.git
cd To-Do-App-in-React
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000).

> **Note:** This project uses `cross-env` to set the `NODE_OPTIONS=--openssl-legacy-provider` flag, which is required due to an OpenSSL compatibility issue with older `react-scripts` on Node.js 17+. This works automatically on both macOS and Windows — no extra configuration needed.

## Features

- Add tasks via the input field
- Edit tasks inline
- Delete tasks with the trash icon
- Animated list transitions

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deploy to GitHub Pages

```bash
npm run deploy
```

## Live Demo

[https://abarna1908.github.io/To-Do-App-in-React/](https://abarna1908.github.io/To-Do-App-in-React/)

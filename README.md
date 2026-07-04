![JakeBay Logo](public/logo.png)

![](public/demo.gif)


# Yung Jake Archive Site Concept

## Overview

JakeBay is a concept project designed to present Yung Jake's archive in a dynamic and interactive way. 
The project uses React to implement search and filtering functionality while drawing inspiration from the visual style of early 2000s websites. 
This site demonstrates how art archives can be presented in a nostalgic and culturally reflective format.

## Data Collection and Preparation

The data underpinning was manually collected and formatted. 
Information was sourced from ~dozen PDFs documenting Yung Jake's artworks, exhibitions, and creative projects. 
The data was first organized into a CSV file and then converted to JSON using Python. 
The JSON is for compatibility with the React application and supports dynamic searching and filtering.
- Data File [`public/Yung_Jake_Archive.json`](public/Yung_Jake_Archive.json)

## Application Design

### Aesthetic Concept
The design is inspired by the aesthetic of the early 2000's eBay homepage. 
Key design features include bold colors, simple layouts, and utilitarian functionality with nostalgic web aesthetics.

Reference Image, a screenshot of eBay's old website ![Old eBay Homepage](public/oldebaywebsitescreenshot.png)

### Functional Highlights
1. Searchable Archive
    - The archive is fully searchable using React state and filtering mechanisms.
    - Users can refine their search using parameters year, dimensions, medium/material, sale availability.

2. Filters Pane
    - Built with React and `ReactSlider`, the filters allow users to dynamically adjust ranges.
    - Medium/material filters are presented as a checkbox group for multi-selection.

3. Results Pane
    - Displays the filtered results in a grid layout.
    - Includes a fallback mechanism to gracefully handle missing data.

4. Ads Pane
    - Designed to replicate the pervasive advertising banners of 2000s websites.
    - While currently unfinished, the ads pane hints at self-promotion and the omnipresence of internet advertisements.


## Technical Features

1. Frontend Framework
   - Developed using React for state management and component-based architecture.
    - Data-driven rendering allows the UI to update dynamically on-interaction with filters and search.

2. Data Handling
    - The archive data is loaded from a JSON file at runtime using the `fetch` API.
    - React's `useState` and `useEffect` hooks are used to manage data and apply filters efficiently.

3. Styling
    - Custom CSS replicates the nostalgic aesthetics of 2000s websites, including bright gradients, hover effects, and playful fonts like Comic Sans.
    - Layout is managed using CSS grid for responsiveness across devices.

4. Custom Branding
    - I made the "JakeBay" logo in Photoshop as a play on the eBay branding.

## Setup and Run

### Prerequisites
- Node.js 18+ and npm
- Git
- Git LFS (required for media assets in this repo)

### Clone and Install
```bash
git clone git@github.com:drwavy/jakebay.git
cd jakebay
git lfs install
git lfs pull
npm install
```

### Run Locally
```bash
npm start
```

The app starts in development mode and is usually available at:
- http://localhost:3000

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `build/` directory.

### Run Tests
```bash
npm test
```

### Useful Notes
- Archive data is loaded from `public/Yung_Jake_Archive.json`.
- If images/GIFs are missing after clone or pull, run `git lfs pull` again.
- `build/` and `node_modules/` are intentionally excluded from version control.

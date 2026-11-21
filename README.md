# Tempest Digital

## Project Overview

This is a React-based web application developed by Christian Gutierrex - CrixiumDigital. The application is built using modern front-end technologies including React 19, Vite, and TailwindCSS.

## Folder Structure

The delivery includes two main folders:

1. **`source-code/`** - Complete source code for the project
2. **`build/`** - Production-ready build (the compiled application)

## Getting Started with the Source Code

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher recommended)

### Installation

1. Navigate to the source code directory

   ```
   cd source-code
   ```

2. Install the dependencies

   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```
   This will start the application in development mode, typically at http://localhost:5173

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production to the `dist` folder
- `npm run preview` - Serves the production build locally for preview

## Deploying the Build Version

The `build/` folder contains a production-ready version of the application. You can deploy this directly to any static web hosting service:

1. Upload all contents of the `build/` folder to your web hosting server
2. Ensure your server is configured to serve a Single Page Application (may require a simple redirect rule)

## Making Changes

Guide to Editing Content in React
If you're familiar with HTML but new to React, here's what you need to know:

1- Component-Based Structure:

React organizes UI into components (similar to reusable HTML sections)
Each component is typically in its own .jsx file in the src/components/ directory

2- How to Edit Text Content:

- Look for text directly in JSX (similar to HTML but inside JavaScript):

<h1>This text can be edited directly</h1>

- Or in variables/constants near the top of component files:

const pageTitle = "About Us"; // Edit this text

function AboutPage() {
return <h1>{pageTitle}</h1>;
}

3- Images:

Static images are in `src/assets/`
To change an image, replace the file (keeping the same name) or update the import path in the component.

4- After Making Changes:

Save the file (the browser will automatically refresh in dev mode)
Run npm run build to create a new production version

### Content Changes

Most text and image content can be found in the source code, in the following locations:

- `src/components/` - UI components
- `src/assets/` - Images, icons, and other static assets
- `public/` - Bubbles animation

### Style Changes

The project uses TailwindCSS for styling:

- Global styles can be found in `src/index.css` and `src/App.css`
- Component-specific styles are applied using Tailwind classes in the component files except for complex animations or styles foun in in `src/index.css` and `src/App.css`.

## Demo Reel

The About Me viewer (`#about`) includes a **Watch Demo Reel** button.
Append `#demo-reel` to the website URL to open the reel directly. Closing the
player returns to About Me; browser Back and Forward also navigate the viewer.

The web-ready video is in `public/videos/demo-reel.mp4`, with its poster in
`public/videos/demo-reel.jpg`. It is a 1080p/30fps H.264/AAC copy optimized
for streaming (MP4 fast start); the original file is not modified or included.
The player loads only when opened, supports native playback controls and mobile
inline playback, and offers a link to open the video separately.

To replace the reel, put a web-optimized MP4 and matching JPG poster at those
paths. Keep the video below GitHub's 100 MB per-file limit. These public files
are copied into the production build without bundling them into JavaScript.

## 3D Collection Direct Links

Append a hash below to the website URL (for example,
`https://your-domain.com/#3d-character-modeling`). Collection links scroll to
the 3D collection and select its card on mobile. Image links also open the
gallery at the specific image. Gallery arrows and dots update the URL so the
current image can be shared; closing the gallery restores its collection hash.

| Collection / Image | Hash |
| --- | --- |
| 3D Character Modeling | `#3d-character-modeling` |
| Pumpkin Character - Front View | `#3d-character-modeling-pumpkin-front-view` |
| Pumpkin Character - Side View | `#3d-character-modeling-pumpkin-side-view` |
| Pumpkin Character - Alternative Design | `#3d-character-modeling-pumpkin-alternative-design` |
| Pumpkin Character - Action Pose | `#3d-character-modeling-pumpkin-action-pose` |
| Sonic Character - Core Design | `#3d-character-modeling-sonic-core-design` |
| Sonic Character - Environment Integration | `#3d-character-modeling-sonic-environment-integration` |
| Sonic Character - Final Render | `#3d-character-modeling-sonic-final-render` |
| 3D Interior Space | `#3d-interior-space` |
| Cozy Fireplace Scene | `#3d-interior-space-fireplace` |
| Modern Living Room | `#3d-interior-space-living-room` |
| Window View Scene | `#3d-interior-space-window` |

Existing `#3d-environment-art` and its video-specific hashes remain supported.

## Dependencies

This project uses the following major dependencies:

- React 19
- Vite 6
- TailwindCSS 4
- Framer Motion (for animations)
- EmailJS (for contact form functionality)
- Lucide React (for icons)
- Rive App (for animations)
- React Intersection Observer (for scroll animations)

## Contact Information

If you need any assistance or have questions about the project, please contact:

**Christian Gutierrez**  
CrixiumDigital  
Email: cristianccggg@gmail.com  
Website: [www.crixiumdigital.com](https://www.crixiumdigital.com)

---

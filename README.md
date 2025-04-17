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

# Australia Zoo – React Website Plan

## Goal
The goal of this project is to build a multi-page React website using routing. The site is about Australian animals and is split into four pages: Home, Mammals, Birds, and Reptiles.

## Pages
- **Home**: Shows welcome text. When you click an animal name in the sidebar, it shows a short summary and a "Read More" button. You can only view one animal at a time. If you click close, it goes back to the welcome message.
- **Mammals / Birds / Reptiles**: Each page shows only animals from that group. When you click on an animal name, the full animal info is shown.

## Components
- **Header**: Has the logo and navigation menu.
- **Footer**: Shows at the bottom of every page.
- **Sidebar**: Shows animal names based on the page (group).
- **Main Content**: Changes depending on which page and which animal is selected.
- **AnimalDetailsModal**: A popup that shows full animal info.
- **AnimalCard**: For displaying animal summary.

## Functionality
- Uses React Router for routing.
- useState and props are used to manage which animal is selected and shown.
- The layout is reused across all pages using a PageLayout component.

## Styling
- CSS Modules are used.
- Layout is responsive.
- Each page has the same structure to look consistent.

## Data
All animal data is stored in a separate file (animalData.js) and imported where needed.

## Extra
- Added Read More / Read Less button in the modal.
- Tried to keep the file structure clean.
- Used semantic names and write clean code.


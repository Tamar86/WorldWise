# **WorldWise App**

This project is a React application built using Vite. The app allows users to create a list of cities and countries they have visited by interacting with a map. It includes a fake login system for authentication and demonstrates the use of various modern React features like context, protected routes, lazy loading, and CSS Modules for styling.

# **About this project **

This project is part of my learning journey in web development on Udemy learning platform. It helped me to deepen my understanding of React, modern front-end development practices, and working with mock backends using JSON Server. The goal was to build a functional and interactive application while exploring key concepts like state management with Context API, protected routes, lazy loading, and component-level styling with CSS Modules.

## **Table of Contents**

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## **Features**

- **Geolocation Interaction:** Users can interact with a map and click on cities to add them to a list of visited places and add notes.
- **City and Country Management:** View lists of visited cities and countries, with additional details accessible by clicking on individual cities.

- **Lazy Loading and Code Splitting:** React’s lazy loading is used to optimize loading performance by splitting the code.
- **Context API:** State management is handled with React’s Context API, including custom providers for city data and authentication.
- **CSS Modules:** The app uses CSS Modules for styling, ensuring styles are scoped locally to components, reducing conflicts and making the styles more maintainable.
- **Responsive Design:** The UI is responsive and user-friendly on both desktop and mobile devices.

## **Installation**

To get started with the project, follow these steps:

1. **Navigate to the project directory:**

   ```bash
   cd worldwise
   ```

2. **Install dependencies:**

   npm install

3. **Run the development server:**

   npm run dev

   4. **Run json server**

   npm run server

4. **Open your browser and go to:**

   http://localhost:3000

## **Usage**

- **Homepage:** The default page that greets the user when they visit the application.
- **Product and Pricing Pages:** Simple informational pages about the product.
- **Login:** A fake login system where users can simulate logging into the app.
- **App Layout:** After logging in, users are redirected to the main app where they can manage their visited cities and countries.
- **City and Country Management:** Click on cities on the map to add them to your list of visited places. Add notes.

## **Project Structure**

- `src/COMPONENTS`: Contains reusable components like `CityList`, `CountryList`, `City`, and `Form`.
- `src/CONTEXTS`: Contains the context providers, including `CitiesContext` and `FakeAuthContext`, used to manage global state.
- `src/PAGES`: Contains the main pages of the application, including `Homepage`, `Product`, `Pricing`, `PageNotFound`, `AppLayout`, and `Login`.
- `src/App.js`: The main component that sets up routing and context providers.
- `src/index.js`: The entry point of the application.
- `src/styles`: Contains CSS Modules used for component-level styling.

## **Technologies Used**

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **React Router:** A library for routing in React applications.
- **Context API:** A React feature used to manage global state across the application.
- **Lazy Loading (React.lazy & Suspense):** Used for code splitting and loading components only when necessary.
- **CSS Modules:** For locally scoped, component-level styling that avoids global CSS conflicts.
- **Responsive Design:** Ensures the app is accessible and functional across different devices.

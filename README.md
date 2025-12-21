# Weather App

## 📌 Project Overview

A responsive and interactive web application that provides real-time weather information for cities worldwide. This project was built to practice asynchronous JavaScript, API integration, and modern CSS layout techniques.

The application allows users to search for a specific city and instantly retrieves key weather metrics including temperature, humidity, wind speed, and dynamic weather conditions.

### [View Project](https://weather-app-tutorial-01.netlify.app/)

## 🚀 Key Features

- **Real-Time Data**: Integrates with the OpenWeatherMap API to fetch live weather data.
- **Dynamic UI**: The interface and weather icons update dynamically based on the current weather condition (Clear, Clouds, Rain, Drizzle, Mist).
- **Error Handling**: Gracefully handles invalid city names or API errors by displaying user-friendly error messages.
- **Responsive Design**: Built with a mobile-first approach using CSS Flexbox and media queries to ensure compatibility across devices.
- **Keyboard support**: Users can trigger the search by pressing the `Enter` key.
- **Default State**: Automatically loads weather data for a default location (Cairo) upon initialization.

## 🛠️ Technologies & Skills Demonstrated

### frontend

- **HTML5**: structured semantic markup.
- **CSS3**: Custom styling with linear gradients, Flexbox for layout, and responsive units (`rem`, `%`).
- **JavaScript (ES6+)**:
  - **DOM Manipulation**: efficiently updating the DOM with data from the API.
  - **Async/Await & Fetch API**: Handling asynchronous network requests in a clean, readable manner.
  - **Event Handling**: Managing user interactions (clicks, keypresses).

## 📂 Project Structure

```
weather-app-tutorial/
├── images/          # Weather condition icons (rain, clear, clouds, etc.)
├── index.html       # Main application structure
├── script.js        # Application logic and API integration
├── styles.css       # Custom styling and responsive design
└── README.md        # Project documentation
```

## 🔧 Setup & Installation

To run this project locally, follow these steps:

1.  **Clone the repository** (or download the source code):
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd weather-app-tutorial
    ```
3.  **Open `index.html`**:
    Simply open the `index.html` file in any modern web browser.

    _Optional: For a better experience, you can use a local development server (e.g., Live Server in VS Code)._

## 💡 Code Highlights

### Asynchronous Data Fetching

Used `async/await` for better readability and error handling when making network requests.

```javascript
async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + `&q=${city}`);
    const data = await response.json();

    if (data.cod == "404") {
      // Handle error state
      showError();
      return;
    }
    // Update UI with data
    updateWeatherUI(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
```

## 🔮 Future Improvements

While fully functional, this project has room for enhancements that I plan to implement:

- **Security**: Move the API key to a backend proxy or use environment variables to prevent exposure in the client-side code.
- **Forecast**: Add a 5-day weather forecast.
- **Geolocation**: Automatically detect the user's location on startup.
- **Unit Testing**: Add basic tests for utility functions.

---

_This project is part of my portfolio demonstrating proficiency in vanilla JavaScript and API integrations._

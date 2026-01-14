# Weather App — OpenWeather API

![Weather App Preview](preview.png)

## 📌 Project Overview

A responsive and interactive web application that provides real-time weather information for cities worldwide. This project was built to practice asynchronous JavaScript, API integration, and modern CSS layout techniques.

The application allows users to search for a specific city and instantly retrieves key weather metrics including temperature, humidity, wind speed, and dynamic weather conditions.

### [View Project](https://weather-app-36l.pages.dev/)

## 🚀 Key Features

- **Real-Time Data**: Integrates with the OpenWeatherMap API to fetch live weather data.
- **Dynamic UI**: The interface and weather icons update dynamically based on the current weather condition (Clear, Clouds, Rain, Drizzle, Mist) using Lucide icons.
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
  - **Vite**: Build tool for faster development.
  - **Lucide Icons**: Modern and consistent icon set.

## 📂 Project Structure

```
weather-app/
├── index.html       # Main application structure
├── main.js          # Application logic and API integration
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
    cd weather-app
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Create a `.env` file**:
    Create a file named `.env` in the root directory and add your OpenWeather API key:
    ```
    VITE_WEATHER_API_KEY=your_api_key_here
    ```
5.  **Run the development server**:
    ```bash
    npm run dev
    ```

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

- **Forecast**: Add a 5-day weather forecast.
- **Geolocation**: Automatically detect the user's location on startup.
- **Unit Testing**: Add basic tests for utility functions.

---

_This project is part of my portfolio demonstrating proficiency in vanilla JavaScript and API integrations._

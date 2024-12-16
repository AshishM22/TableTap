# Restaurant POS System

## Overview

The **Restaurant POS System Frontend** is a robust and scalable interface designed specifically for restaurant management. This project handles the user-facing aspects of the application, including order management, payment processing, and user interactions, enhancing operational efficiency and customer satisfaction.

## Features

- **Order Management**: Intuitive UI for managing dine-in, takeout, and delivery orders.
- **Inventory Visualization**: Real-time display of inventory levels.
- **Sales Dashboard**: Interactive charts and reports for daily, weekly, and monthly sales.
- **AI-Powered Assistance**: Integrated ChatGPT API to assist users with queries and menu recommendations.
- **Offline Support**: Progressive Web App (PWA) ensures usability even without internet.

## Tech Stack

### Frontend

- **React** (with Vite) for building the user interface.
- **TypeScript** for type-safe development.
- **Material-UI (MUI)** for pre-designed, customizable UI components.
- **Redux Toolkit** for state management and data flow.
- **React Router** for navigation and routing.

### Additional Tools & Libraries

- **Axios** for API calls.
- **Jest** and **React Testing Library** for unit testing.
- **ESLint** and **Prettier** for code quality and formatting.
- **PWA** for offline support and enhanced mobile experience.

## Installation

### Prerequisites

- Node.js (v16+)
- A running backend server (refer to the backend repository for setup)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/restaurant-pos-frontend.git
   cd restaurant-pos-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure the necessary environment variables:
   ```env
   VITE_API_URL=http://localhost:5000 # Backend API base URL
   VITE_CHATGPT_API_KEY=your_chatgpt_api_key # Optional
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Access the application at `http://localhost:3000` in your browser.
2. Use the login credentials provided by the backend to access the system.
3. Explore features like order creation, payment processing, and sales visualization.

## Tests

- Run unit tests using Jest:
  ```bash
  npm run test
  ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/add-something`).
3. Commit your changes.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or suggestions, feel free to reach out:

- **Name**: Ashish Munot
- **Email**: ashish.munot22@gmail.com
- **GitHub**: [ashishmunot22](https://github.com/ashishmunot22)
# TableTap

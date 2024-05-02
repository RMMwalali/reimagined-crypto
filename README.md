# React + Vite
# Crypto Tracker

Welcome to the Crypto Tracker project! This React application provides a sleek and responsive interface for users to view a list of cryptocurrencies and their detailed information. 

## Features

- **Homepage**: Displays a list of cryptocurrencies with their logo, name, symbol, current price, market cap, and 24-hour percentage change.
- **Details Page**: Users can click on a cryptocurrency to navigate to a details page showing more in-depth information about the selected cryptocurrency.
- **State Management**: Utilizes React's state management tools such as `useState`, `useContext`, or `Redux` to manage the application's state efficiently.
- **Responsive Design**: Crafted with a mobile-first approach to ensure a seamless experience across both desktop and mobile devices.
- **Error Handling**: Implements robust error handling for API requests, displaying user-friendly messages if an error occurs.
- **Loading State**: Features a loading spinner or message while data is being fetched from the API.
- **Pagination**: Includes pagination for the list of cryptocurrencies to enhance user navigation.

## Authentication Workflow

- **Viewing**: New visitors can browse the list of cryptocurrencies without logging in.
- **Interaction**: Upon clicking a cryptocurrency, users are prompted to log in to access detailed information.
- **Redirection**: After successful authentication, users are redirected back to the details page with full access.
- **Sign Out**: An accessible button is provided for users to sign out when needed.

## Setup Instructions

To get started with the Crypto Tracker project, follow these steps:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/RMMwalali/reimagined-crypto.git
   cd crypto-tracker
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Development Server**
   ```sh
   npm run dev
   ```
   This will start the development server on `http://localhost:5173/`.

4. **Build for Production**
   ```sh
   npm run build
   ```
   This command will create a production build of the application.

5. **Lint the Code**
   ```sh
   npm run lint
   ```
   Use this command to run ESLint for code quality checks.

6. **Preview the Production Build**
   ```sh
   npm run preview
   ```
   This allows you to run the production build locally to preview before deployment.

## Dependencies

- **Auth0**: For secure user authentication and authorization.
- **Chakra UI**: A simple, modular, and accessible component library.
- **Axios**: Promise-based HTTP client for making API requests.
- **Bootstrap**: For styling and responsive design.
- **Framer Motion**: For animation and gesture handling.
- **React Router DOM**: For navigation between different components.
- **Recharts**: For rendering charts based on cryptocurrency data.
- **Sass**: For writing more maintainable CSS.
- **Zustand**: A small, fast, and scalable bearbones state-management solution.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: https://reimagined-crypto.vercel.app/

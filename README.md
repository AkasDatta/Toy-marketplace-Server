# b7a11-toy-marketplace-server-side-AkasDatta

# ToyVerse Server

Welcome to the server-side of ToyVerse, a simple and intuitive online platform for buying and selling animal-themed toys. This server is responsible for handling various API endpoints, managing data, and facilitating secure transactions.

## Tech Stack

The ToyVerse Marketplace server is built using the following technologies:

- **Node.js**: A JavaScript runtime environment for executing server-side code.
- **Express.js**: A fast and minimalist web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing and managing data related to toy listings, user accounts, and more.
- **Firebase Authentication**: A secure and reliable authentication service used for user registration and login.
- **Cloudinary**: A cloud-based media management platform for storing and serving toy images.
- **Stripe**: A popular payment processing platform for handling secure transactions.

## Installation

To run the ToyVerse Marketplace server locally on your machine, follow these steps:

1. Clone the repository: `git clone [repository URL]`
2. Install dependencies: `npm install`
3. Set up the environment variables for database connection, authentication, Cloudinary, and Stripe integration.
4. Start the server: `npm start`
5. The server should now be running on `http://localhost:5000`.

Make sure you have the latest version of Node.js and MongoDB installed on your machine.

## API Endpoints

The ToyVerse Marketplace server exposes the following API endpoints:

- `GET /category`: Retrieves all toy categories.
- `GET /category/:id`: Retrieves details of a specific toy category.
- `GET /addtoys`: Retrieves all toy listings.
- `POST /addtoys`: Creates a new toy listing.
- `PATCH /addtoys/:id`: Updates the status of a specific toy listing.
- `DELETE /addtoys/:id`: Deletes a specific toy listing.

Please refer to the API documentation for more details on request/response formats and authentication requirements.

## Deployment

The ToyVerse Marketplace server can be deployed using the Vercel platform. The `vercel.json` configuration file specifies the build and routing settings for deployment. Make sure to set up the appropriate environment variables in the production environment to ensure the server runs smoothly.

## Contributions

Contributions to the ToyVerse Marketplace server project are welcome! If you have any bug fixes, feature enhancements, or suggestions, please submit a pull request. For major changes, please open an issue to discuss the proposed changes beforehand.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize this `README.md` file based on your specific server-side implementation details and requirements.

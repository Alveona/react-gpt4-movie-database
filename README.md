# React Movie Database Demo App

*This application was written entirely by ChatGPT, it's using the `kinopoiskapiunofficial.tech` API.*

## Functionality

The application allows users to view the top 100 popular films, search for films by keyword, and get a random film recommendation.

## Local Development

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the project directory.
3. Rename `.env.example` to `.env` and replace `YOUR_API_KEY` with your API key from `kinopoiskapiunofficial.tech`.
4. Start the development server by running `npm start`.
5. Navigate to `http://localhost:3000` in a web browser to view the application.

## Docker Deployment

To deploy the application using Docker, follow these steps:

1. Clone the repository to your local machine.
2. Rename `.env.example` to `.env` and replace `YOUR_API_KEY` with your API key from `kinopoiskapiunofficial.tech`.
3. Build the Docker image by running `docker build -t my-react-app .` in the project directory. Replace `my-react-app` with the desired name for your Docker image.
4. Start a Docker container by running `docker run -d -p 3000:3000 my-react-app`. Replace `my-react-app` with the name of your Docker image.
5. Navigate to `http://<your-vds-ip>:3000` in a web browser to view the application.

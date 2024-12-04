# React-i18next Demo Project

This project demonstrates the implementation of `react-i18next` with namespaces for internationalization (i18n) in a React application.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js (version >= 20.0.0)
- Docker
- Docker Compose
- pnpm (version >= 9.5.0)

### Installation

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Run the project:**

   ```bash
   pnpm dev
   ```

### Available Scripts

- `start`: Starts the application using Docker Compose.
- `stop`: Stops the Docker containers.
- `dev`: Runs the development server using Vite.
- `build`: Builds the production-ready application bundle using Vite.
- `lint`: Lints JavaScript and JSX files using ESLint.
- `preview`: Previews the production build locally using Vite.

## Internationalization (i18n)

This project uses react-i18next for internationalization with namespaces. The translations for different languages are managed in separate `.i18n.js` files under the `src/locales` directory.

## Docker Setup

This project includes Docker configuration files (`Dockerfile`, `docker-compose.yml`) for containerized development and deployment.

- **To start the application:**

  ```bash
  pnpm start
  ```

  After running this command, the project will be served at http://localhost:8080.

- **To stop the application:**

  ```bash
  pnpm dev
  ```

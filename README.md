# Dev Starter Template

A modern Node.js starter template built for developer productivity. Includes a clean project structure, environment management, linting, formatting, testing, and a ready-to-run API server.

## Included tools

- Node.js
- Express
- ESLint
- Prettier
- Jest
- Nodemon
- dotenv
- GitHub-ready starter structure

## Quick start

1. Clone the repository
2. Install dependencies:
   npm install
3. Copy environment variables:
   cp .env.example .env
4. Start in development mode:
   npm run dev
5. Start the production server:
   npm start

## Scripts

- npm run dev — runs the app with nodemon
- npm start — starts the app in production mode
- npm run lint — runs ESLint
- npm run lint:fix — auto-fixes lint issues
- npm run format — formats the project with Prettier
- npm test — runs the test suite

## Project structure

```bash
src/
  config/
    env.js
  index.js
  app.js
tests/
  app.test.js
.env.example
.eslintrc.json
.gitignore
.prettierrc
package.json
README.md
```

## Environment

The template uses a `.env` file for configuration. Example values are included in `.env.example`.

## Notes

This starter is intentionally lightweight and easy to extend. It is ideal for building APIs, internal tools, or a base for more complex Node.js applications.

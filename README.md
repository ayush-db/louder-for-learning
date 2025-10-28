# Louder for Learning

A full-stack learning platform built with React frontend and Node.js backend.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database
- Git

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayush-db/louder-for-learning.git
   cd louder-for-learning
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your database credentials and other configuration.

4. **Set up the database**
   - Create a PostgreSQL database named `louder_for_learning`
   - Update the database credentials in your `.env` file

5. **Start the development servers**
   ```bash
   npm run dev
   ```
   This will start both frontend (port 3000) and backend (port 3001) servers concurrently.

## Project Structure

```
louder-for-learning/
├── frontend/          # React frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # Node.js backend API
│   ├── config/       # Database and other configurations
│   ├── routes/       # API routes
│   └── package.json  # Backend dependencies
├── env.example       # Environment variables template
└── package.json      # Root package with workspace scripts
```

## Available Scripts

### Root Level Scripts
- `npm run install-all` - Install dependencies for all packages
- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:frontend` - Start only the frontend development server
- `npm run dev:backend` - Start only the backend development server
- `npm run build` - Build the frontend for production
- `npm run start` - Start the backend server in production mode

### Frontend Scripts (in frontend/ directory)
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build

### Backend Scripts (in backend/ directory)
- `npm run dev` - Start with nodemon for development
- `npm start` - Start the server

## Environment Variables

Create a `.env` file in the root directory based on `env.example`:

```env
# Database Configuration
DB_USER=postgres
DB_HOST=localhost
DB_NAME=louder_for_learning
DB_PASSWORD=your_db_password
DB_PORT=5432

# Application Configuration
NODE_ENV=development
PORT=3001
FRONTEND_PORT=3000
```

## Database Setup

1. Install PostgreSQL on your system
2. Create a database named `louder_for_learning`
3. Update the database credentials in your `.env` file
4. The application will automatically connect to the database on startup

## Development

### Frontend Development
The frontend is built with React and Vite. It runs on `http://localhost:3000` by default.

### Backend Development
The backend is built with Node.js and Express. It runs on `http://localhost:3001` by default.

### Running Tests
```bash
# Run tests (when implemented)
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
#!/bin/bash

# Louder for Learning Setup Script
echo "🚀 Setting up Louder for Learning..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js v16 or higher."
    exit 1
fi

echo "✅ Node.js version $(node -v) detected"

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL is not installed. Please install PostgreSQL to use the database features."
    echo "   You can continue without it, but database features won't work."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm run install-all

# Set up environment file
if [ ! -f .env ]; then
    echo "🔧 Setting up environment file..."
    cp env.example .env
    echo "✅ Created .env file from template"
    echo "⚠️  Please edit .env file with your database credentials"
else
    echo "✅ .env file already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your database credentials"
echo "2. Create a PostgreSQL database named 'louder_for_learning'"
echo "3. Run 'npm run dev' to start the development servers"
echo ""
echo "Frontend will be available at: http://localhost:3000"
echo "Backend will be available at: http://localhost:3001"

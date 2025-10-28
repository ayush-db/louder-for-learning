# Louder for Learning Setup Script (PowerShell)
Write-Host "🚀 Setting up Louder for Learning..." -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version $nodeVersion detected" -ForegroundColor Green
}
catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js v16 or higher." -ForegroundColor Red
    Write-Host "   Download from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Check Node.js version
$nodeVersionNumber = [int]($nodeVersion -replace 'v(\d+)\..*', '$1')
if ($nodeVersionNumber -lt 16) {
    Write-Host "❌ Node.js version $nodeVersionNumber is too old. Please install Node.js v16 or higher." -ForegroundColor Red
    exit 1
}

# Check if PostgreSQL is installed
try {
    $psqlVersion = psql --version
    Write-Host "✅ PostgreSQL detected: $psqlVersion" -ForegroundColor Green
}
catch {
    Write-Host "⚠️  PostgreSQL is not installed. Please install PostgreSQL to use the database features." -ForegroundColor Yellow
    Write-Host "   You can continue without it, but database features won't work." -ForegroundColor Yellow
    Write-Host "   Download from: https://www.postgresql.org/download/" -ForegroundColor Yellow
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
try {
    npm run install-all
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
}
catch {
    Write-Host "❌ Failed to install dependencies. Please check your internet connection and try again." -ForegroundColor Red
    exit 1
}

# Set up environment file
if (-not (Test-Path ".env")) {
    Write-Host "🔧 Setting up environment file..." -ForegroundColor Blue
    if (Test-Path "env.example") {
        Copy-Item "env.example" ".env"
        Write-Host "✅ Created .env file from template" -ForegroundColor Green
        Write-Host "⚠️  Please edit .env file with your database credentials" -ForegroundColor Yellow
    }
    else {
        Write-Host "⚠️  env.example file not found. You may need to create .env manually." -ForegroundColor Yellow
    }
}
else {
    Write-Host "✅ .env file already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎉 Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Edit .env file with your database credentials" -ForegroundColor White
Write-Host "2. Create a PostgreSQL database named 'louder_for_learning'" -ForegroundColor White
Write-Host "3. Run 'npm run dev' to start the development servers" -ForegroundColor White
Write-Host ""
Write-Host "Frontend will be available at: http://localhost:3000" -ForegroundColor Magenta
Write-Host "Backend will be available at: http://localhost:3001" -ForegroundColor Magenta
Write-Host ""
Write-Host "To run this script again, use: .\setup.ps1" -ForegroundColor Gray
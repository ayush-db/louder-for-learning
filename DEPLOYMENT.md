# Netlify Deployment Guide

This guide explains how to deploy the Louder for Learning frontend to Netlify.

## Prerequisites

- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- A Netlify account (free tier is sufficient)

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [https://app.netlify.com](https://app.netlify.com)
   - Sign in or create an account
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   - Netlify should auto-detect settings from `netlify.toml`
   - Verify these settings:
     - **Build command:** `npm run install-all && npm run build`
     - **Publish directory:** `frontend/dist`
     - **Node version:** `18`

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your site
   - You'll get a URL like `https://your-site-name.netlify.app`

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   # Build the site first
   npm run install-all
   npm run build

   # Deploy to Netlify
   netlify deploy --prod
   ```

   Or for a draft deployment:
   ```bash
   netlify deploy
   ```

## Configuration

The `netlify.toml` file contains all the necessary configuration:

- **Build command:** Installs all dependencies and builds the frontend
- **Publish directory:** Points to `frontend/dist` where Vite outputs the build
- **Redirects:** Configured for React Router SPA routing (all routes redirect to `index.html`)
- **Node version:** Set to Node 18

## Environment Variables

If your frontend needs environment variables (for API URLs, etc.), add them in Netlify:

1. Go to your site in Netlify dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add any required variables (e.g., `VITE_API_URL` for Vite env vars)

## Backend Deployment

**Important:** Netlify only deploys the frontend (static files). Your backend needs to be deployed separately:

- **Recommended platforms for backend:**
  - [Railway](https://railway.app) - Easy PostgreSQL + Node.js deployment
  - [Render](https://render.com) - Free tier available
  - [Heroku](https://heroku.com) - Requires credit card for PostgreSQL
  - [Fly.io](https://fly.io) - Good for Node.js apps
  - [AWS](https://aws.amazon.com) - More complex but scalable

- **After deploying backend:**
  - Update your frontend to use the backend URL (if not already configured)
  - Set environment variables in Netlify if the frontend needs the backend URL
  - Update CORS settings in your backend to allow requests from your Netlify domain

## Custom Domain

To use a custom domain:

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

## Continuous Deployment

Netlify automatically deploys when you push to your main branch. You can configure branch deployments:

1. Go to **Site settings** → **Build & deploy** → **Continuous Deployment**
2. Configure branch settings (e.g., deploy previews for pull requests)

## Troubleshooting

### Build Fails

- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version matches (currently set to 18)

### 404 Errors on Routes

- Verify the redirect rule in `netlify.toml` is correct
- Check that React Router is configured properly

### Backend Connection Issues

- Ensure your backend is deployed and accessible
- Update frontend API URLs to point to deployed backend
- Check CORS settings in backend
- Verify environment variables are set in Netlify

## Support

For issues specific to Netlify deployment, check:
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Community Forums](https://answers.netlify.com)


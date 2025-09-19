# Deployment Guide for GitHub Pages

This guide will help you deploy your skincare landing page to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js 18+ installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `skincare-landing`)
5. Make it public (required for free GitHub Pages)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Push Your Code to GitHub

1. Open terminal/command prompt in your project directory
2. Initialize git repository (if not already done):
```bash
git init
```

3. Add all files:
```bash
git add .
```

4. Commit your changes:
```bash
git commit -m "Initial commit: Skincare landing page"
```

5. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/skincare-landing.git
```

6. Push to GitHub:
```bash
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment workflow will automatically trigger

## Step 4: Configure GitHub Actions (Automatic)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will:
- Build your Next.js application
- Deploy it to GitHub Pages
- Run automatically on every push to the main branch

## Step 5: Access Your Live Site

Once deployed, your site will be available at:
```
https://YOUR_USERNAME.github.io/skincare-landing
```

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out` directory
3. Copy the contents of `out` to your hosting provider

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable custom domain in GitHub Pages settings

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Ensure there are no TypeScript or ESLint errors
- Try building locally: `npm run build`

### Site Not Loading
- Wait a few minutes for GitHub Pages to update
- Check the Actions tab for deployment status
- Ensure the repository is public

### Styling Issues
- Clear browser cache
- Check that all CSS files are properly linked
- Verify Tailwind CSS is working correctly

## Updating Your Site

To update your site:
1. Make changes to your code
2. Commit and push to the main branch:
```bash
git add .
git commit -m "Update: Description of changes"
git push origin main
```
3. GitHub Actions will automatically rebuild and deploy

## Performance Tips

- Images are optimized automatically by Next.js
- Static generation ensures fast loading times
- The site is mobile-responsive out of the box
- All assets are minified and compressed

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Review the README.md for setup instructions
3. Ensure all dependencies are up to date
4. Verify your Node.js version is 18 or higher

Your skincare landing page is now live and ready to convert visitors into customers! 🎉

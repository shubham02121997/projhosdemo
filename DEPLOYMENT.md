# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## 🚀 Deployment Setup

### 1. Create GitHub Repository

1. Create a new GitHub repository named `st-joseph-hospital-demo`
2. Initialize it with the existing code or push the `frontend-demo` folder

### 2. Update package.json

Replace `YOUR_USERNAME` in `package.json` with your actual GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/st-joseph-hospital-demo"
```

For example, if your username is `johnsmith`:
```json
"homepage": "https://johnsmith.github.io/st-joseph-hospital-demo"
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Build and deployment**, select **GitHub Actions** as the source
4. Save the settings

### 4. Configure GitHub Actions Permissions

1. Go to **Settings** > **Actions** > **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### 5. Push to GitHub

Push your code to the `main` branch:

```bash
cd frontend-demo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/st-joseph-hospital-demo.git
git push -u origin main
```

## 🔄 Automatic Deployment

Once you push to the `main` branch, GitHub Actions will automatically:

1. Build the project using `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Make your site available at `https://YOUR_USERNAME.github.io/st-joseph-hospital-demo`

## 🛠️ Manual Deployment

You can also deploy manually using npm scripts:

```bash
npm run deploy
```

This will:
1. Run `npm run build` to create the production build
2. Deploy the `dist` folder to the `gh-pages` branch
3. Update GitHub Pages automatically

## 📁 Project Structure

```
frontend-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── dist/                    # Build output (auto-generated)
├── src/                     # Source code
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration with base path
└── DEPLOYMENT.md           # This file
```

## 🔧 Configuration Details

### Vite Configuration
- **Base path**: `/st-joseph-hospital-demo/` (configured in `vite.config.js`)
- **Dev server**: `http://127.0.0.1:8080`

### Package.json Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Manual deployment to GitHub Pages

### GitHub Actions Workflow
- **Trigger**: Push to `main` branch or manual workflow dispatch
- **Node version**: 20
- **Build**: Runs `npm ci` and `npm run build`
- **Deploy**: Uses GitHub Pages deployment action

## 🐛 Troubleshooting

### Build Fails
- Ensure Node.js version 20+ is installed
- Run `npm install` to update dependencies
- Check for any syntax errors in components

### Deployment Fails
- Verify GitHub Actions permissions are set correctly
- Check that the repository name matches `st-joseph-hospital-demo`
- Ensure the `homepage` in package.json uses your correct username

### 404 Errors on GitHub Pages
- Verify the base path in `vite.config.js` matches your repository name
- Check that GitHub Pages source is set to **GitHub Actions**
- Wait a few minutes for DNS propagation

### Styles Not Loading
- Ensure the base path is correctly configured
- Check that asset paths in `dist/index.html` include the base path
- Clear browser cache and reload

## 📊 Deployment Status

Check your deployment status at:
- **Actions tab**: View workflow runs and logs
- **Pages tab**: View deployment history and site status
- **Live site**: `https://YOUR_USERNAME.github.io/st-joseph-hospital-demo`

## 🎯 Next Steps

1. Update the `homepage` in package.json with your GitHub username
2. Create the GitHub repository
3. Enable GitHub Pages with GitHub Actions
4. Configure workflow permissions
5. Push code to trigger automatic deployment
6. Access your live site!

---

**Note**: The application uses mock data and is intended for demonstration purposes only. No backend connection is required.
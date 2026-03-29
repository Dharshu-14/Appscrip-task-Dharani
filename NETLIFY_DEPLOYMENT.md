# Netlify Deployment Guide - Appscrip

Complete step-by-step guide to deploy the Appscrip e-commerce application to Netlify.

## 📋 Prerequisites

Before deploying to Netlify, ensure you have:

1. **Git repository** - Your project must be hosted on GitHub, GitLab, or Bitbucket
2. **Netlify account** - Free account at https://www.netlify.com/
3. **npm/Node.js** - Installed locally (v18.17.0 or higher)
4. **Project files** - All code committed to your repository

## 🚀 Deployment Steps

### Step 1: Prepare Your Repository

1. **Ensure all code is committed:**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Verify `package.json` has correct scripts:**
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "lint": "eslint .",
       "preview": "vite preview"
     }
   }
   ```

3. **Test local build:**
   ```bash
   npm install
   npm run build
   ```
   This should create a `dist/` folder with your production build.

### Step 2: Create Netlify Account

1. Go to https://www.netlify.com/
2. Click **"Sign Up"**
3. Choose login method (GitHub, GitLab, Bitbucket, or email)
4. If using GitHub, authorize Netlify access to your repositories

### Step 3: Deploy from Git (Recommended Method)

#### Method A: GitHub Integration (Automatic)

1. **Login to Netlify Dashboard:**
   - Visit https://app.netlify.com/
   - Sign in with your account

2. **Create New Site from Git:**
   - Click **"Add new site"** or **"New site from Git"** button
   - Choose **"GitHub"** as the provider
   - Select your repository: `Appscrip-task-Dharani`

3. **Configure Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `18.17.0` (or compatible)
   - Leave environment variables empty (unless needed)

4. **Review Configuration:**
   - Netlify will read your `netlify.toml` file
   - Verify all settings are correct
   - Click **"Deploy site"**

5. **Wait for Deployment:**
   - Netlify will build and deploy your site
   - You'll see build logs in real-time
   - Once complete, you'll get a deployment URL

#### Method B: Manual Deployment (Netlify CLI)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Authenticate with Netlify:**
   ```bash
   netlify login
   ```
   - This opens your browser to authorize the CLI
   - Copy and paste the token when prompted

3. **Build Your Project:**
   ```bash
   npm run build
   ```

4. **Deploy to Netlify:**
   ```bash
   netlify deploy --prod --dir=dist
   ```
   - `--prod` flag deploys to production
   - `--dir=dist` specifies the build output directory

5. **Your Site is Live:**
   - Netlify will provide you with a deployment URL
   - Example: `https://your-site-name.netlify.app`

### Step 4: Configure Your Domain

#### Option A: Use Netlify Subdomain (Free)
Your site is automatically deployed at: `https://your-site.netlify.app`

#### Option B: Connect Custom Domain (Premium Feature)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `appscrip.com`)
4. Choose to register new or connect existing domain
5. Follow DNS configuration steps

### Step 5: Environment Variables (If Needed)

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **"Edit variables"**
3. Add any environment variables your app needs:
   ```
   VITE_API_URL=https://api.example.com
   VITE_ENV=production
   ```
4. Trigger a new deploy for changes to take effect

### Step 6: Enable Additional Features

#### Branch Deploys
1. Go to **Site settings** → **Build & deploy** → **Deploy contexts**
2. Enable **"Deploy previews from pull requests"**
3. Every pull request gets a preview URL

#### Post Processing
1. Go to **Site settings** → **Build & deploy** → **Post processing**
2. Enable options:
   - ✅ Minify CSS
   - ✅ Minify JavaScript
   - ✅ Bundle CSS
   - ✅ Preload Linked Assets

#### Security
1. Go to **Site settings** → **Security**
2. Enable:
   - HTTPS (automatic with free SSL)
   - Password protection (if needed)

## 📁 Configuration Files Explained

### `netlify.toml`
Main configuration file with:
- **Build settings:** Build command and publish directory
- **Redirects:** SPA routing configuration
- **Headers:** Security and caching headers
- **Context-specific settings:** Different configs for production/preview/branch deploys

### `.netlifyignore`
Specifies files/folders to exclude from deployment (similar to `.gitignore`)

### `public/_redirects`
Handles URL rewrites and redirects for SPA routing (ensures all routes go to index.html)

## 🔄 Continuous Deployment (CD)

### Automatic Deployments
- **Every push to main branch:** Automatic production deployment
- **Pull requests:** Preview URL created automatically
- **Other branches:** Optional branch deploy preview

### Manual Redeployment
1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Deploy site"**

### Rollback to Previous Version
1. Go to **Deploys** tab
2. Find previous deployment
3. Click on it and select **"Publish deploy"**

## 🐛 Troubleshooting

### Build Fails
**Problem:** Deployment fails with build error
- Check **Deploy logs** in Netlify dashboard
- Verify `npm run build` works locally
- Ensure `dist/` directory is created after build
- Check Node version compatibility

```bash
npm run build
npm run preview  # Test local preview
```

### Blank Page / 404 Errors
**Problem:** Site shows blank page or 404 errors
- Verify `public/_redirects` file exists
- Check `netlify.toml` has correct `publish = "dist"`
- Clear browser cache and hard reload (Cmd+Shift+R)

### CORS Issues
**Problem:** API calls failing with CORS errors
- Add API URLs to CORS-allowed origins
- Or use Netlify Functions as proxy

### Environment Variables Not Working
**Problem:** `process.env` or `import.meta.env` undefined
- In Vite, use `import.meta.env.VITE_*` for exposed variables
- Prefix all custom variables with `VITE_`
- Redeploy after adding/changing variables

```javascript
// Correct way in Vite
const apiUrl = import.meta.env.VITE_API_URL;
```

### Slow Build Times
**Problem:** Deployment takes too long
- Check **Build logs** for bottlenecks
- Consider caching dependencies
- Upgrade to faster Netlify plan if needed

## 📊 Monitoring & Analytics

### View Deployment Status
- Go to **Deploys** tab to see all deployments
- Click on deployment to view detailed logs
- See performance metrics and errors

### Enable Netlify Analytics
1. Go to **Site settings** → **Analytics**
2. Enable **Netlify Analytics** (paid feature)
3. View traffic, performance, and user insights

### Set Up Error Tracking
1. Go to **Site settings** → **Integrations** → **Error tracking**
2. Enable to catch runtime errors
3. Review errors in dashboard

## 🔐 Security Best Practices

1. **Enable HTTPS:** Automatic with Netlify (included in `netlify.toml`)
2. **Security Headers:** Already configured in `netlify.toml`
   - X-Frame-Options: SAMEORIGIN
   - X-Content-Type-Options: nosniff
   - X-XSS-Protection: 1; mode=block

3. **Environment Variables:** Keep sensitive data in environment variables
   - Never commit API keys or tokens
   - Use `.env.local` (gitignored) locally

4. **CORS Configuration:** If using APIs
   ```toml
   [[headers]]
     for = "/api/*"
     [headers.values]
       Access-Control-Allow-Origin = "*"
   ```

## 📈 Performance Optimization

### Caching Strategy (Already in `netlify.toml`)
- **Assets (JS/CSS):** 1 year cache (immutable)
- **HTML files:** No cache (must-revalidate)
- **Images/Fonts:** 1 year cache
- **HTML files:** Checked on every request

### Enable Gzip Compression
- Automatic with Netlify (no config needed)

### HTTP/2 Server Push
- Automatic with Netlify (no config needed)

## 📝 Common Deployment Commands

### Using Netlify CLI
```bash
# Install CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy to production
netlify deploy --prod --dir=dist

# Deploy to staging/preview
netlify deploy --dir=dist

# View site info
netlify sites:list

# Open site in browser
netlify open

# View logs
netlify logs
```

### Using GitHub (Auto-Deploy)
```bash
# Push changes to GitHub
git add .
git commit -m "Update site"
git push origin main

# Netlify automatically builds and deploys!
# Watch progress in Netlify dashboard
```

## ✅ Post-Deployment Checklist

- [ ] Site is accessible at your domain
- [ ] All pages load without 404 errors
- [ ] Navigation and routing works correctly
- [ ] Images load properly
- [ ] Responsive design works on mobile
- [ ] HTTPS is enabled (lock icon visible)
- [ ] SEO meta tags are present
- [ ] Sitemap.xml is accessible
- [ ] robots.txt is accessible
- [ ] Performance is acceptable (Lighthouse score >90)
- [ ] No console errors in browser DevTools
- [ ] Forms and buttons work correctly
- [ ] Analytics are tracking (if enabled)

## 🎉 Success!

Your Appscrip app is now deployed on Netlify! 

**Your live URL:** `https://your-site-name.netlify.app`

### Next Steps:
1. **SEO:** Submit sitemap to Google Search Console
2. **Analytics:** Setup Google Analytics 4
3. **Monitoring:** Setup error tracking and alerts
4. **CI/CD:** Configure branch deploys for team workflows
5. **Performance:** Monitor Lighthouse metrics

## 📚 Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Netlify CLI Docs](https://docs.netlify.com/cli/get-started/)
- [Netlify Best Practices](https://docs.netlify.com/configure-builds/overview/)
- [Domain Configuration](https://docs.netlify.com/domains-https/custom-domains/)

---

**Last Updated:** March 30, 2026
**Status:** Ready for Deployment ✅

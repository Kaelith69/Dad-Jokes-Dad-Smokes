# GitHub Setup Instructions

## 🚀 Push to GitHub

Your local repository is ready! Follow these steps to push it to GitHub:

### Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Fill in the details:
   - **Repository name**: `dad-jokes-dad-smokes` (or your preferred name)
   - **Description**: "A fun web app displaying 396 curated dad jokes"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **Create repository**

### Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd "c:\projekt\Dad Jokes Dad Smokes"
git remote add origin https://github.com/YOUR_USERNAME/dad-jokes-dad-smokes.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Alternative: Using SSH (if you have SSH keys set up)

```bash
cd "c:\projekt\Dad Jokes Dad Smokes"
git remote add origin git@github.com:YOUR_USERNAME/dad-jokes-dad-smokes.git
git branch -M main
git push -u origin main
```

### Step 3: Verify

Once pushed, refresh your GitHub repository page. You should see:
- ✅ All your files
- ✅ README.md displayed on the main page
- ✅ LICENSE file
- ✅ All joke files

## 📝 Future Updates

When you make changes, use these commands to push updates:

```bash
cd "c:\projekt\Dad Jokes Dad Smokes"
git add .
git commit -m "Your commit message here"
git push
```

## 🎯 Quick Commands Reference

```bash
# Check status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Pull latest changes
git pull
```

## 🌐 Enable GitHub Pages (Optional)

To host your app for free on GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/dad-jokes-dad-smokes/`

---

Need help? Check the [GitHub Documentation](https://docs.github.com)

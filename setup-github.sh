#!/bin/bash

# GitHub Repository Setup Script
# Replace YOUR_USERNAME with your actual GitHub username

echo "🚀 Setting up GitHub repository connection..."

# Add remote origin (replace YOUR_USERNAME)
echo "📡 Adding remote origin..."
read -p "Enter your GitHub username: " username
git remote add origin https://github.com/$username/Personal-Portfolio-Website.git

# Rename branch to main
echo "🌿 Renaming branch to main..."
git branch -M main

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "🌐 Your repository is now live at: https://github.com/$username/Personal-Portfolio-Website"
echo "🎯 Next steps:"
echo "   1. Visit your repository on GitHub"
echo "   2. Set up GitHub Pages for free hosting"
echo "   3. Add your repository URL to your portfolio"
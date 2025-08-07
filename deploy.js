#!/usr/bin/env node

/**
 * Simple deployment script for GitHub Pages
 * This script builds the project and prepares it for GitHub Pages deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...\n');

try {
  // Step 1: Clean previous build
  console.log('📦 Cleaning previous build...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Step 2: Install dependencies
  console.log('📥 Installing dependencies...');
  execSync('npm ci', { stdio: 'inherit' });

  // Step 3: Build the project
  console.log('🔨 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 4: Create CNAME file if needed (for custom domain)
  // Uncomment and modify if you have a custom domain
  // fs.writeFileSync(path.join('dist', 'CNAME'), 'your-domain.com');

  // Step 5: Create .nojekyll file to bypass Jekyll processing
  console.log('📝 Creating .nojekyll file...');
  fs.writeFileSync(path.join('dist', '.nojekyll'), '');

  // Step 6: Create 404.html for SPA routing
  console.log('📄 Creating 404.html for SPA routing...');
  const indexHtml = fs.readFileSync(path.join('dist', 'index.html'), 'utf8');
  fs.writeFileSync(path.join('dist', '404.html'), indexHtml);

  console.log('\n✅ Build completed successfully!');
  console.log('📁 Files are ready in the "dist" directory');
  console.log('\n🚀 To deploy to GitHub Pages:');
  console.log('1. Push your code to the main branch');
  console.log('2. GitHub Actions will automatically deploy');
  console.log('3. Or run: npm run deploy (if gh-pages is configured)');
  console.log('\n🌐 Your site will be available at:');
  console.log('https://angelshipmanagement1-maker.github.io/Bhushan_jadhav_portfolio/');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
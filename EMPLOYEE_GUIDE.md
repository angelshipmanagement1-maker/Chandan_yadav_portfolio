# Employee Management Guide

## 📋 How to Add New Employees

### Step 1: Open the Employee Data File
Navigate to `src/data/employees.js` and locate the `employees` array.

### Step 2: Add New Employee Object
Copy this template and fill in the details:

```javascript
{
  id: "ASF006", // Auto-generated, increment the number
  name: "Employee Full Name",
  designation: "Job Title/Position",
  photo: "https://example.com/photo.jpg", // Employee photo URL
  phone: "+91 98765 43220",
  emergencyContact: "+91 98765 43221",
  address: "Complete address with city, state, pincode",
  guardian: "Guardian Name (Relation)", // e.g., "John Doe (Father)"
  codeName: "ALPHA-1", // Unique code name
  bloodGroup: "A+", // Blood group
  qualification: "Educational background and degrees",
  dateOfJoining: "2024-01-15", // Format: YYYY-MM-DD
  department: "Department Name",
  experience: "Years of experience",
  certifications: ["Cert1", "Cert2", "Cert3"], // Array of certifications
  status: "Active" // Active or Inactive
}
```

### Step 3: Photo Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x400 pixels (square)
- **Quality**: High resolution for best results
- **Hosting**: Use image hosting services like:
  - Unsplash (for demo): `https://images.unsplash.com/photo-ID?w=400&h=400&fit=crop&crop=face`
  - Imgur: Upload and get direct link
  - GitHub: Store in repository and use raw link
  - Cloudinary: Professional image hosting

### Step 4: ID Generation
Employee IDs follow the pattern: `ASF` + 3-digit number
- ASF001, ASF002, ASF003, etc.
- Always increment from the last used number

### Step 5: Code Names
Create unique code names following these patterns:
- ALPHA-1, BETA-2, GAMMA-3, DELTA-4, ECHO-5
- Or use: MARINE-1, OCEAN-2, WAVE-3, etc.

## 🎨 Customization Options

### Company Information
Edit `companyInfo` object in `src/data/employees.js`:

```javascript
export const companyInfo = {
  name: "Your Company Full Name",
  shortName: "Short Name", // Used in headers
  logo: "/logo.png", // Company logo path
  address: "Complete company address",
  phone: "+91 22 1234 5678",
  email: "info@company.com",
  website: "www.company.com",
  established: "2015", // Year established
  license: "LICENSE-NUMBER" // License/registration number
};
```

### Color Scheme
Modify colors in `src/index.css`:

```css
:root {
  --primary-cyan: #00ffff;     /* Main accent color */
  --primary-blue: #0066cc;     /* Primary blue */
  --accent-electric: #00ff88;  /* Success/active color */
  --accent-neon: #ff0080;      /* Warning/highlight color */
  --dark-navy: #0a0f1c;        /* Dark background */
  /* ... other colors */
}
```

### Fonts
Current fonts used:
- **Orbitron**: Futuristic headings
- **Rajdhani**: Body text
- **Space Mono**: Code/monospace text

To change fonts, update the Google Fonts link in `index.html` and CSS variables.

## 📱 Photo Shape Options

The system automatically handles different photo shapes:

### Current Shape: Circle
- Photos are automatically cropped to circular frames
- Works best with square images
- Automatically centers faces

### To Change Photo Shape:
Edit `.photo-frame` class in `src/components/EmployeeCard.css`:

```css
/* For square photos */
.photo-frame {
  border-radius: var(--radius-lg); /* Instead of 50% */
}

/* For hexagon shape */
.photo-frame {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border-radius: 0;
}

/* For diamond shape */
.photo-frame {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  border-radius: 0;
}
```

## 🚀 Deployment Instructions

### Method 1: Automatic GitHub Pages (Recommended)

1. **Create GitHub Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/emp_id_web.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to Pages section
   - Source: GitHub Actions
   - The workflow will automatically deploy

3. **Access Your Site**:
   - URL: `https://yourusername.github.io/emp_id_web/`

### Method 2: Manual Deployment

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Run deployment script
node deploy.js
```

## 📊 Employee Data Structure

### Required Fields:
- `id`: Unique identifier (ASF001, ASF002, etc.)
- `name`: Full name
- `designation`: Job title
- `photo`: Image URL
- `status`: "Active" or "Inactive"

### Optional Fields:
- `phone`: Contact number
- `emergencyContact`: Emergency contact
- `address`: Full address
- `guardian`: Guardian information
- `codeName`: Unique code
- `bloodGroup`: Blood type
- `qualification`: Education
- `dateOfJoining`: Join date
- `department`: Department name
- `experience`: Years of experience
- `certifications`: Array of certificates

## 🎯 Best Practices

### Photo Guidelines:
1. Use high-quality, professional photos
2. Ensure good lighting and clear face visibility
3. Square aspect ratio works best
4. File size under 500KB for faster loading

### Data Entry:
1. Always use consistent date format (YYYY-MM-DD)
2. Keep phone numbers in international format
3. Use proper capitalization for names
4. Verify all information before adding

### Security:
1. Don't include sensitive information like SSN
2. Use code names instead of sensitive identifiers
3. Regularly update employee status
4. Keep emergency contacts current

## 🆘 Troubleshooting

### Common Issues:

1. **Photo not loading**:
   - Check if URL is accessible
   - Verify image format (JPG, PNG, WebP)
   - Ensure HTTPS URLs for security

2. **Build fails**:
   - Run `npm install` to update dependencies
   - Check for syntax errors in employees.js
   - Verify all required fields are present

3. **Deployment issues**:
   - Ensure repository is public for GitHub Pages
   - Check GitHub Actions logs for errors
   - Verify base path in vite.config.js

### Getting Help:
- Check browser console for errors
- Verify all employee objects have required fields
- Test locally before deploying
- Review GitHub Actions logs for deployment issues

## 📈 Future Enhancements

Possible additions:
- Search and filter functionality
- Print-friendly ID cards
- QR code generation
- Employee photo upload
- Admin panel for easy editing
- Database integration
- Multi-language support
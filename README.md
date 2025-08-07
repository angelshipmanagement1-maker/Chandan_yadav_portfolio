# Angel Seafarers Documentation Pvt. Ltd. - Employee ID System

A professional, cyber-punk styled digital employee ID card system built with React and modern web technologies.

## 🌟 Features

- **Professional Design**: Cyber-punk marine-themed UI with glowing effects and animations
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Flip cards with detailed employee information
- **Modular**: Easy to add new employees through the data file
- **Secure**: Professional appearance with security indicators
- **Modern**: Built with React, Vite, and modern CSS

## 🚀 Live Demo

Visit the live demo: [Angel Seafarers Employee ID](https://yourusername.github.io/emp_id_web/)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Advanced styling with custom properties
- **Font Awesome** - Professional icons
- **Google Fonts** - Orbitron, Rajdhani, Space Mono
- **GitHub Pages** - Free hosting

## 📋 Employee Information Included

Each employee card contains:
- Employee photo with professional frame
- Name and designation
- Employee ID and code name
- Blood group and joining date
- Department and experience
- Contact information
- Emergency contact details
- Address and guardian information
- Professional qualifications
- Certifications
- Security features

## 🎨 Design Features

- **Cyber-punk aesthetic** with neon glows and effects
- **Marine theme** with anchor logos and nautical colors
- **Professional layout** suitable for corporate use
- **Animated elements** including scanning lines and particles
- **Responsive design** that adapts to all screen sizes
- **Accessibility features** including high contrast and reduced motion support

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/emp_id_web.git
   cd emp_id_web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Adding New Employees

To add new employees, edit the `src/data/employees.js` file:

```javascript
{
  id: "ASF006",
  name: "New Employee Name",
  designation: "Position Title",
  photo: "https://example.com/photo.jpg",
  phone: "+91 98765 43220",
  emergencyContact: "+91 98765 43221",
  address: "Complete Address",
  guardian: "Guardian Name (Relation)",
  codeName: "CODE-1",
  bloodGroup: "A+",
  qualification: "Educational Background",
  dateOfJoining: "2024-01-01",
  department: "Department Name",
  experience: "Years of experience",
  certifications: ["Cert1", "Cert2", "Cert3"],
  status: "Active"
}
```

## 🎨 Customization

### Colors
Edit the CSS custom properties in `src/index.css`:

```css
:root {
  --primary-cyan: #00ffff;
  --primary-blue: #0066cc;
  --accent-electric: #00ff88;
  /* ... other colors */
}
```

### Company Information
Update company details in `src/data/employees.js`:

```javascript
export const companyInfo = {
  name: "Your Company Name",
  shortName: "Short Name",
  address: "Your Address",
  phone: "Your Phone",
  email: "your@email.com",
  // ... other details
};
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🚀 Deployment

### GitHub Pages (Automatic)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://yourusername.github.io/emp_id_web/`

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email info@angelseafarers.com or create an issue in this repository.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for demo photos
- React community for excellent documentation

---

**Angel Seafarers Documentation Pvt. Ltd.** - Professional marine documentation services with cutting-edge digital solutions.
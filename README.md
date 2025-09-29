# Personal Portfolio Website 🚀

A modern, responsive portfolio website showcasing professional experience, skills, and projects. Built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20for%20Deployment-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)

## ✨ Features

### 🎨 Design & UI
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern Animations**: Smooth scroll animations and hover effects
- **Dual Layout System**: Different optimized layouts for mobile vs desktop
- **Dark/Light Theme Ready**: Clean, professional color scheme

### 📱 Mobile-First Approach
- **No Horizontal Scrolling**: Perfect mobile experience
- **Touch-Friendly**: Optimized touch targets and interactions
- **Footer-Aware Components**: Smart UI elements (e.g., BackToTop button hides at footer)
- **Responsive Typography**: Scales beautifully across screen sizes

### 🔧 Technical Features
- **TypeScript**: Full type safety and better development experience
- **Vite**: Lightning-fast development and build tools
- **Fixed Port Development**: Always runs on localhost:5173
- **Environment Variables**: Proper configuration management
- **reCAPTCHA Integration**: Ready for contact form (currently disabled)
- **EmailJS Ready**: Contact form backend configured

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx        # About section
│   ├── BackToTop.tsx    # Smart back-to-top button
│   ├── CareerTimeline.tsx # Professional experience timeline
│   ├── Education.tsx    # Education background
│   ├── Footer.tsx       # Site footer
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Landing section
│   ├── Projects.tsx     # Portfolio projects
│   └── Skills.tsx       # Technical skills
├── hooks/               # Custom React hooks
├── App.tsx             # Main application component
├── index.css           # Global styles and animations
└── main.tsx            # Application entry point
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Personal-Portfolio-Website.git
   cd Personal-Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Opens at: http://localhost:5173

4. **Build for production**
   ```bash
   npm run build
   ```

### Development Commands

```bash
npm run dev      # Start development server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run stop     # Stop development server
npm run restart  # Restart development server
npm run lint     # Run ESLint
```

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env` and configure:

```env
# reCAPTCHA Keys
VITE_RECAPTCHA_SITE_KEY_DEV=your_dev_key
VITE_RECAPTCHA_SITE_KEY_PROD=your_prod_key

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Contact Form
To enable the contact form:
1. Set `ENABLE_CONTACT = true` in `src/App.tsx`
2. Uncomment Contact component import and usage
3. Configure reCAPTCHA and EmailJS credentials

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)  
- **Desktop**: > 1024px (xl+)

## 🎯 Key Components

### Career Timeline
- **Mobile**: Compact cards with vertical timeline
- **Desktop**: Zigzag layout with alternating sides
- **Features**: Company links, achievement highlights, current position indicator

### BackToTop Button
- **Smart Hiding**: Disappears when footer is visible on mobile
- **Responsive Sizing**: Smaller on mobile, larger on desktop
- **Smooth Animations**: Fade and slide transitions

### Navigation
- **Sticky Header**: Fixed navigation with scroll detection
- **Mobile Menu**: Collapsible hamburger menu
- **Smooth Scrolling**: Animated navigation to sections

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.3.1
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 5.4.8
- **Icons**: Lucide React
- **Form Handling**: EmailJS (ready)
- **Security**: Google reCAPTCHA v3 (ready)
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📦 Dependencies

### Core
- React & React DOM
- TypeScript
- Tailwind CSS

### UI & Icons
- Lucide React (icons)
- Custom animations & transitions

### Forms & Security (Ready)
- EmailJS (contact forms)
- Google reCAPTCHA v3 (bot protection)

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
npm run deploy
```

### Vercel/Netlify
- Connect your GitHub repository
- Build command: `npm run build`
- Output directory: `dist`

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` and `src/index.css` for:
- Color schemes
- Typography
- Animations
- Component styles

### Content
Update these files with your information:
- `src/components/Hero.tsx` - Personal intro
- `src/components/About.tsx` - About section
- `src/components/CareerTimeline.tsx` - Work experience
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Skills.tsx` - Technical skills
- `src/components/Education.tsx` - Education background

## 📋 Features Checklist

✅ Responsive design across all devices  
✅ Modern animations and transitions  
✅ Professional career timeline  
✅ Skills showcase with progress indicators  
✅ Project portfolio with links  
✅ Contact form ready (EmailJS + reCAPTCHA)  
✅ SEO-friendly structure  
✅ Fast loading with Vite  
✅ TypeScript for reliability  
✅ Clean, maintainable code  

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Contact

**Sakhawat Hossain**
- Portfolio: [sakhawatsifat.me](https://sakhawatsifat.me/)
- LinkedIn: [linkedin.com/in/hossain-sakhawat](https://www.linkedin.com/in/hossain-sakhawat)
- GitHub: [github.com/sakhawat-sifat](https://github.com/sakhawat-sifat)
- Email: sakhawat.hossain8088@gmail.com

---

⭐ **Star this repository if it helped you build your portfolio!**

Built with ❤️ using React, TypeScript, and Tailwind CSS

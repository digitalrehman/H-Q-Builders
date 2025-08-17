```

```

#  HK Builders Website

A professional, fully responsive business website built with React.js and Tailwind CSS for  HK Builders company.

## 🚀 Features

- **Modern React.js Architecture** - Built with latest React 18 and functional components
- **Responsive Design** - Fully responsive across all devices (mobile to 2XL)
- **Professional Animations** - Smooth scroll-based animations using Framer Motion
- **SEO Optimized** - Complete SEO setup with meta tags and structured data
- **Contact Integration** - EmailJS integration for contact forms
- **Performance Optimized** - Lazy loading images and optimized bundle splitting

## 🛠️ Tech Stack

- **Frontend**: React.js 18 (JavaScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Forms**: EmailJS
- **Build Tool**: Vite
- **Font**: Outfit (Google Fonts)

## 📁 Project Structure

\`\`\`
 HK Builders-website/
├── public/
│   ├── images/          # Website images
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── config.js    # All content and configuration
│   ├── components/
│   │   ├── Banner.js    # Reusable banner component
│   │   ├── ContactForm.js # Contact form with validation
│   │   ├── Footer.js    # Site footer
│   │   └── Navbar.js    # Navigation component
│   ├── pages/
│   │   ├── Home.js      # Homepage
│   │   ├── About.js     # About page
│   │   ├── Services.js  # Services page
│   │   ├── Projects.js  # Projects portfolio
│   │   └── Contact.js   # Contact page
│   ├── App.js           # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/ HK Builders-construction/website.git
   cd  HK Builders-website
   \`\`\`
2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`
3. **Configure EmailJS** (Optional)

   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the EmailJS configuration in `src/components/ContactForm.js`:
     \`\`\`javascript
     await emailjs.send(
     "YOUR_SERVICE_ID",    // Replace with your service ID
     "YOUR_TEMPLATE_ID",   // Replace with your template ID
     templateParams,
     "YOUR_PUBLIC_KEY"     // Replace with your public key
     )
     \`\`\`
4. **Add your images**

   - Replace placeholder images in `src/assets/config.js`
   - Add actual images to `public/images/` folder
5. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`
6. **Open your browser**

   - Navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Content Management

All website content is centralized in `src/assets/config.js`:

- **Site metadata** (title, description, keywords)
- **Contact information** (phone, email, address)
- **Navigation menu items**
- **Images and media**
- **Service offerings**
- **Testimonials**
- **Company information**

### Styling

The website uses Tailwind CSS for styling:

- **Colors**: Primary red (#dc2626) with professional grays
- **Typography**: Outfit font family
- **Responsive**: Mobile-first approach
- **Components**: Reusable component architecture

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.js`
3. Update navigation in `src/assets/config.js`

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy**

### Other Platforms

The built files are in the `dist` folder after running `npm run build`.

## 📱 Features Overview

### Pages

- **Home** - Hero section, services, testimonials, recent work
- **About** - Company story, values, team, statistics
- **Services** - Detailed service offerings and process
- **Projects** - Portfolio with category filtering
- **Contact** - Contact form, information, business hours

### Components

- **Responsive Navigation** - Mobile-friendly with contact popup
- **Contact Forms** - Validation and EmailJS integration
- **Animated Sections** - Scroll-based reveal animations
- **Auto-sliding Carousels** - Services and testimonials
- **SEO Optimization** - Meta tags and structured data

### Performance

- **Lazy Loading** - Images load as needed
- **Code Splitting** - Optimized bundle sizes
- **Responsive Images** - Proper sizing for all devices
- **Accessibility** - ARIA labels and keyboard navigation

## 🔧 Configuration

### EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template
4. Get your Service ID, Template ID, and Public Key
5. Update `src/components/ContactForm.js`

### Google Analytics (Optional)

Add your Google Analytics tracking code to `index.html`:

\`\`\`html

<!-- Google Analytics -->

<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>

\`\`\`

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths in `config.js`
2. **EmailJS not working**: Verify service configuration
3. **Build errors**: Check Node.js version (v16+)
4. **Styling issues**: Ensure Tailwind CSS is properly configured

### Support

For issues and questions:

- Check the documentation
- Review the code comments
- Contact the development team

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

** HK Builders**

- Website: https:// HK Builders-construction.com
- Email: info@ HK Buildersconstruction.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for  HK Builders

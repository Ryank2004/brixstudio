# Brix Studio Website

A modern and responsive website for Brix Studio, a digital agency specializing in creating websites, designs, tools, and content that convert and sell.

<img width="1012" alt="Screenshot 2025-04-03 at 13 36 52" src="https://github.com/user-attachments/assets/51fc3e93-8d97-4f5e-972a-f08c19ebf6ef" />


## 📋 Overview

This project is built with Astro, a modern static site generator that offers exceptional performance and developer experience. It uses a component-based architecture, following atomic design principles with atoms, molecules, and organisms.

The website features smooth animations using GSAP and Lenis for scroll interactions, has a fully responsive design, and implements modern UI/UX practices.

## 🚀 Features

- **Component-based architecture** following atomic design principles
- **Smooth scroll animations** using Lenis and GSAP
- **Responsive design** that works on all devices
- **Modern UI components** including:
  - Animated hero section with text rotation
  - Card stack with scroll-driven animations
  - Dynamic project portfolio
  - FAQ section with expandable details
  - Contact form with email integration
- **Performance optimized** static site generation with Astro
- **Netlify deployment** ready with serverless functions for contact form

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Lenis](https://lenis.studiofreight.com/) - Smooth scroll library
- [SplitType](https://github.com/lukePeavey/SplitType) - Text splitting for animations
- [Nodemailer](https://nodemailer.com/) - Email sending for the contact form
- [Netlify](https://www.netlify.com/) - Deployment and serverless functions

## 🔧 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/brixstudio.git
   cd brixstudio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-app-password
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open your browser and visit `http://localhost:4321`

## 📁 Project Structure

```
/
├── public/             # Static assets
│   ├── css/
│   ├── fonts/
│   └── images/
├── src/
│   ├── components/     # UI components following atomic design
│   │   ├── atoms/      # Basic components like Logo, SVG icons
│   │   ├── molecules/  # Composite components like Menu, Hero
│   │   └── organisms/  # Complex components like Navigation, Footer
│   ├── data/           # JSON data for projects, FAQs
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages
│   └── scripts/        # JavaScript utilities
└── package.json        # Dependencies and scripts
```

## 🌐 Pages

- **Home** (`/`) - Main landing page showcasing the agency's services and projects
- **Projects** (`/projecten`) - Portfolio of the studio's work
- **Team** (`/team`) - Team introduction page (coming soon)
- **Blog** (`/blog`) - Blog section (coming soon)
- **Contact** (`/contact`) - Contact form

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: Default
- Tablet: 768px
- Desktop small: 813px 
- Desktop: 1024px

## 🚢 Deployment

The project is set up for Netlify deployment with the Astro Netlify adapter:

```bash
npm run build
# or
pnpm build
```

The built files in the `dist/` directory can be deployed to any static hosting service.

## 📧 Contact Form

The contact form uses Astro's server-side capabilities along with Nodemailer to send emails. 
Make sure to configure the environment variables for the email service.

## 🧩 Custom Components

### Animations

Most animations in the project use GSAP and are triggered by scroll events using ScrollTrigger.
The `smooth-scroll.js` file integrates Lenis smooth scrolling with GSAP for a seamless experience.

### Card Stack Component

The stacked cards component in the home page uses GSAP ScrollTrigger to create a parallax-like effect as users scroll through the page.

### Project Grid

The projects are displayed in a staggered grid layout with clip-path animations on scroll.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [GSAP by GreenSock](https://greensock.com/gsap/)
- [Lenis by Studio Freight](https://lenis.studiofreight.com/)
- [Astro](https://astro.build/)
- [Netlify](https://www.netlify.com/)
- [FontSource](https://fontsource.org/) for Inter fonts

# Brix Studio Website

A modern and responsive website for Brix Studio, a digital agency specializing in creating websites, designs, AI-agents, and content that convert and sell.

![ScreenRecording2025-06-04at16 37 14-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/e06bf592-8c65-4ba5-8761-e8c6c5c9f696)


## 📋 Overview

This project is built with Astro, a modern static site generator that offers exceptional performance and developer experience. It uses a component-based architecture, following atomic design principles with atoms, molecules, and organisms.

The website features smooth animations using GSAP and Lenis for scroll interactions, has a fully responsive design, implements modern UI/UX practices, and includes comprehensive SEO optimization with structured data.

## 🚀 Features

- **Component-based architecture** following atomic design principles
- **Smooth scroll animations** using Lenis and GSAP
- **Responsive design** that works on all devices
- **Content Management** with Contentful CMS integration
- **SEO Optimized** with structured data and meta tags
- **Modern UI components** including:
  - Animated hero section with text rotation
  - Card stack with scroll-driven animations
  - Dynamic project portfolio with clip-path animations
  - FAQ section with expandable details
  - Contact form with email integration
  - Blog system with dynamic routing
- **Performance optimized** static site generation with Astro
- **Netlify deployment** ready with serverless functions

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Lenis](https://lenis.studiofreight.com/) - Smooth scroll library
- [SplitType](https://github.com/lukePeavey/SplitType) - Text splitting for animations
- [Contentful](https://www.contentful.com/) - Headless CMS for blog content
- [Nodemailer](https://nodemailer.com/) - Email sending for the contact form
- [Netlify](https://www.netlify.com/) - Deployment and serverless functions

## 🔧 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm
- Contentful account (for blog functionality)

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
   CONTENTFUL_SPACE_ID=your-contentful-space-id
   CONTENTFUL_ACCESS_TOKEN=your-contentful-access-token
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
│   ├── css/            # Global styles
│   ├── fonts/          # Custom fonts (Midnight, JetBrains Mono)
│   └── images/         # Images and graphics
├── src/
│   ├── components/     # UI components following atomic design
│   │   ├── atoms/      # Basic components (Logo, Icons, etc.)
│   │   ├── molecules/  # Composite components (Hero, Menu, Cards)
│   │   └── organisms/  # Complex components (Navigation, Footer, FAQ)
│   ├── data/           # JSON data for projects, FAQs
│   ├── layouts/        # Page layouts with SEO optimization
│   ├── lib/            # Utility functions (Contentful client)
│   ├── pages/          # Astro pages with dynamic routing
│   │   ├── api/        # API endpoints (contact form)
│   │   ├── blogs/      # Dynamic blog pages
│   │   └── projecten/  # Dynamic project pages
│   └── scripts/        # JavaScript utilities (smooth scroll)
└── package.json        # Dependencies and scripts
```

## 🌐 Pages

- **Home** (`/`) - Main landing page showcasing the agency's services and projects
- **Projects** (`/projecten`) - Portfolio of the studio's work
- **AI agents** (`/ai-agents`) - Dedicated page for AI agent services 
- **Blog** (`/blog`) - Blog section
- **Individual Blogs** (`/blogs/[slug]`) - Dynamic blog post pages
- **Contact** (`/contact`) - Contact form
- **Success** (`/succes`) - Thank you page after form submission

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: Default(320px+)
- Tablet: 768px
- Desktop small: 813px 
- Desktop: 1024px
- Large desktop: 1224px+

## 🎨 Design System

### Color Palette
```
--light-color: #F8FAFC;
--medium-color: #E4E6E6;
--dark-color: #1C1918;
--background-color: #18181B;
--primary-color: #FACC15;
--secondary-color: #60A5FA;
--tertiary-color: #3A6CAA;
--quaternary-color: #1E426D;
```

### Typography
- **Headings**: Midnight (custom font)
- **Body**: Inter (variable font)
- **Code/Technical**: JetBrains Mono

### SEO & Performance

- **Structured Data**: Schema.org implementation for all pages
- **Meta Tags**: Comprehensive meta descriptions and titles
- **Breadcrumbs**: Structured navigation for SEO
- **Image Optimization**: WebP format with lazy loading
- **Performance**: Optimized bundle sizes and loading strategies

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

### Blog System

Dynamic blog pages are generated from Contentful CMS, with rich text rendering and SEO optimization for each post.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [GSAP by GreenSock](https://greensock.com/gsap/)
- [Lenis by Studio Freight](https://lenis.studiofreight.com/)
- [Astro](https://astro.build/)
- [Contentful](https://contentful.com/)
- [Netlify](https://www.netlify.com/)
- [FontSource](https://fontsource.org/) for Inter fonts

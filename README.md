# Andrew Ambrosino - Portfolio Website

A modern, performant portfolio website showcasing Andrew Ambrosino's work as a software engineer, designer, and product
builder. Built with Next.js 15, React 19, and Tailwind CSS 4.

## 🚀 Live Site

Visit the live site at [your-domain.com](https://your-domain.com)

## ✨ Features

- **Modern Design System**: Built with Tailwind CSS 4 and Radix UI components
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **MDX Content**: Rich content authoring with MDX support
- **Project Showcase**: Dynamic project pages with detailed case studies
- **Work Timeline**: Interactive work experience timeline
- **AI Integration**: Built-in AI capabilities with OpenAI SDK
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js 15 and Turbopack
- **Type Safe**: Full TypeScript implementation
- **Accessible**: WCAG compliant with Radix UI primitives
- **Toast Notifications**: User feedback with Sonner
- **Copy Email Functionality**: Easy contact with toast confirmation

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Content**: [MDX](https://mdxjs.com/) with remark-gfm
- **Icons**: [Tabler Icons](https://tabler.io/icons) & [Lucide React](https://lucide.dev/)
- **Animations**: Custom CSS animations with tw-animate-css
- **AI**: [AI SDK](https://sdk.vercel.ai/) with OpenAI integration
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🏗 Project Structure

```
site/
├── app/
│   ├── (pages)/           # Route groups
│   │   ├── (home)/        # Homepage
│   │   ├── about/         # About page with MDX content
│   │   └── projects/      # Project showcase
│   │       └── [id]/      # Dynamic project pages
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Site favicon
├── components/
│   ├── ui/                # Reusable UI components
│   └── mdx/               # MDX-specific components
├── lib/
│   └── work-experience/   # Work experience data
├── hooks/                 # Custom React hooks
├── const/                 # Constants and configuration
├── docs/                  # Documentation
└── public/
    └── img/               # Static images and assets
        └── projects/      # Project-specific images
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd site
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📝 Content Management

### Adding Projects

1. Create a new directory in `app/(pages)/projects/[id]/`
2. Add a `page.tsx` file with your project content
3. Include project images in `public/img/projects/[project-name]/`

### Editing About Content

The about page content is managed through MDX files in the about directory.

### Work Experience

Work experience data is managed in `lib/work-experience/` and displayed as an interactive timeline.

## 🎨 Customization

### Theme Configuration

The site uses a custom design system built on Tailwind CSS 4. Key configuration files:

- `tailwind.config.js` - Tailwind configuration
- `components.json` - shadcn/ui configuration
- `app/globals.css` - Global styles and CSS variables

### Adding Components

UI components follow the shadcn/ui pattern and are located in `components/ui/`. The project uses:

- Radix UI primitives for accessibility
- Class Variance Authority for component variants
- Tailwind Merge for style composition
- Clsx for conditional classes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push to main

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **Railway**: Connect your GitHub repository
- **AWS Amplify**: Use the Next.js SSR configuration

## 📊 Performance

This site is optimized for performance with:

- Next.js 15 App Router for optimal loading
- React 19 for improved performance
- Turbopack for faster development builds
- Optimized images with Next.js Image component
- Font optimization with next/font
- Tree-shaking and code splitting
- Tailwind CSS 4 for smaller bundle sizes

## 🔮 Planned Features

- [ ] Analytics integration
- [ ] AI chatbot functionality
- [ ] View transitions
- [ ] Command palette (⌘K)
- [ ] Glassy iOS-inspired design elements
- [ ] Resume download functionality
- [ ] Additional project showcases (Canvas, Linear roadmap, consulting work)

## 🤝 Contributing

This is a personal portfolio site, but if you find bugs or have suggestions:

1. Open an issue describing the problem
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Andrew Ambrosino**

- Website: [your-domain.com](https://your-domain.com)
- Email: [your-email@domain.com](mailto:your-email@domain.com)
- LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)

---

Built with ❤️ using Next.js 15, React 19, TypeScript, and modern web technologies.

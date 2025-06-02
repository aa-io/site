# Andrew Ambrosino - Portfolio Website

A modern, performant portfolio website showcasing Andrew Ambrosino's work as a software engineer, designer, and product
builder. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Live Site

Visit the live site at [your-domain.com](https://your-domain.com)

## ✨ Features

- **Modern Design System**: Built with Tailwind CSS and Radix UI components
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **MDX Content**: Rich content authoring with MDX support
- **Project Showcase**: Dynamic project pages with detailed case studies
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js 15 and Turbopack
- **Type Safe**: Full TypeScript implementation
- **Accessible**: WCAG compliant with Radix UI primitives

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Content**: [MDX](https://mdxjs.com/) with remark-gfm
- **Icons**: [Tabler Icons](https://tabler.io/icons) & [Lucide React](https://lucide.dev/)
- **Animations**: Custom CSS animations with tw-animate-css
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
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # Reusable UI components
│   └── mdx/               # MDX-specific components
├── lib/
│   └── work-experience/   # Work experience data
├── hooks/                 # Custom React hooks
├── const/                 # Constants and configuration
└── public/
    └── img/               # Static images and assets
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/portfolio-site.git
cd portfolio-site
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

The about page content is managed through MDX files in `app/(pages)/about/content.mdx`

## 🎨 Customization

### Theme Configuration

The site uses a custom design system built on Tailwind CSS. Key configuration files:

- `tailwind.config.js` - Tailwind configuration
- `components.json` - shadcn/ui configuration
- `app/globals.css` - Global styles and CSS variables

### Adding Components

UI components follow the shadcn/ui pattern and are located in `components/ui/`. Use the component generator:

```bash
npx shadcn-ui@latest add [component-name]
```

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
- Turbopack for faster development builds
- Optimized images with Next.js Image component
- Font optimization with next/font
- Tree-shaking and code splitting

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

Built with ❤️ using Next.js, TypeScript, and modern web technologies.

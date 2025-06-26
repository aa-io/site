# Andrew Ambrosino - Personal Site

A modern, minimalist personal portfolio website built with Next.js 15 and React 19. This site showcases professional
experience, projects, and serves as a digital presence for Andrew Ambrosino.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout using Tailwind CSS 4
- **Dark/Light Mode**: Theme switching with next-themes
- **Work Experience**: Clean display of professional background with structured data
- **Project Showcase**: Individual work project pages with MDX content
- **Custom Animations**: Smooth animations with Motion (Framer Motion)
- **Social Links**: Integrated social media and professional links
- **Custom Fonts**: Soehne font family with multiple weights and styles
- **MDX Support**: Rich content authoring with custom MDX components
- **Performance Optimized**: Leverages Next.js Turbopack for fast development
- **Accessible**: Built with Radix UI components for accessibility
- **Custom GPT Integration**: Link to personalized GPT assistant
- **SEO Optimized**: Custom OG images and meta tags for social sharing

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Runtime**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) with shadcn/ui
- **Icons**: [Tabler Icons](https://tabler.io/icons)
- **Content**: [MDX](https://mdxjs.com/) with custom components
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Code Highlighting**: [Sugar High](https://github.com/huozhi/sugar-high)
- **Typography**: [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🏗️ Project Structure

```
site/
├── app/
│   ├── (pages)/
│   │   ├── page.tsx              # Main homepage
│   │   └── work/
│   │       ├── catch/
│   │       │   ├── content.mdx   # Catch project content
│   │       │   └── page.tsx      # Catch project page
│   │       └── noyo/
│   │           ├── content.mdx   # Noyo project content
│   │           └── page.tsx      # Noyo project page
│   ├── assets/
│   │   └── font/                 # Soehne font family files
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── animate-in.tsx        # Animation wrapper
│   │   ├── section.tsx           # Section component
│   │   ├── social-link.tsx       # Social link components
│   │   ├── theme-provider.tsx    # Theme context
│   │   ├── work-page-wrapper.tsx # Work project layout
│   │   └── work-row.tsx          # Work experience row
│   ├── lib/
│   │   └── mdx.ts               # MDX utilities
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout
│   ├── opengraph-image.jpg     # OG image for social sharing
│   └── twitter-image.jpg        # Twitter card image
├── data/
│   ├── links.ts                 # Social and primary links
│   ├── licenses.ts              # Professional licenses
│   └── work.ts                  # Work experience data
├── public/
│   ├── img/
│   │   ├── covers/              # Project cover images
│   │   ├── logos/               # Company logos
│   │   └── projects/            # Project screenshots
│   └── resume.pdf               # Resume download
├── mdx-components.tsx           # Custom MDX components
├── next.config.ts               # Next.js configuration with MDX
└── components.json              # shadcn/ui configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd site
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser** Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Adding Work Experience

Edit the `data/work.ts` file to add new work experiences:

```tsx
{
  company: 'Company Name',
  logo: '/img/logos/company.png',
  slug: 'company-slug', // Optional: for dedicated project pages
  roles: [
    {
      title: 'Job Title',
      subtitle: 'Optional subtitle',
      startDate: '2020',
      endDate: '2023', // Optional: omit for current role
    },
  ],
}
```

### Creating Work Project Pages

1. Create a new directory in `app/(pages)/work/[project-name]/`
2. Add `page.tsx` with the page component
3. Add `content.mdx` with the project content
4. Add project images to `public/img/projects/[project-name]/`

### Updating Social Links

Edit `data/links.ts` to modify social and primary links:

```tsx
export const socialLinks: Array<SocialLinkType> = [
  {
    href: 'https://linkedin.com/in/username',
    icon: IconBrandLinkedin,
    text: 'LinkedIn',
  },
  // ... more links
];
```

### Custom MDX Components

The site includes rich MDX components in `mdx-components.tsx`:

- **Cover**: Image with caption
- **Typography**: Custom heading styles with auto-generated IDs
- **Code blocks**: Syntax highlighting with Sugar High
- **Tables**: Styled table components
- **Links**: External link handling

### Styling

The project uses Tailwind CSS 4 with custom CSS variables:

- `app/globals.css` - Global styles and CSS variables
- Custom font loading with Soehne font family
- Dark/light mode support with CSS variables
- Responsive design with mobile-first approach

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

For other platforms:

```bash
pnpm build
```

The build output will be in the `.next` folder.

## 📱 SEO & Social

The site includes comprehensive SEO optimization:

- **Custom OG Images**: Automatically generated Open Graph images for social sharing
- **Meta Tags**: Proper meta tags for all pages
- **Structured Data**: Work experience and project data structured for search engines
- **Sitemap**: Automatically generated sitemap
- **Twitter Cards**: Optimized Twitter card support

## 🎯 Roadmap

### Completed ✅

- [x] Fix readme
- [x] Social links implementation
- [x] Custom OG image generation
- [x] OG header links
- [x] Domain setup and deployment

### In Progress 🚧

- [ ] Analytics integration
- [ ] Stack section with technologies used
- [ ] Professional licenses display
- [ ] llms.txt implementation

### Future Features 🔮

- [ ] Command menu (⌘K) for quick navigation
- [ ] Additional content sections
- [ ] Blog/Articles section
- [ ] Project case studies with detailed write-ups
- [ ] Interactive project demos

## 🔧 Features in Detail

### Animation System

- Custom `AnimateIn` component with staggered animations
- Motion-powered smooth transitions
- Performance-optimized animations

### Work Experience Display

- Structured data in TypeScript
- Company logos and role hierarchies
- Date range handling for current and past roles
- Optional project page linking

### MDX Content System

- Custom MDX components for rich content
- Automatic heading ID generation
- Image optimization with Next.js Image
- Code syntax highlighting
- Responsive typography

### Theme System

- Light/dark mode toggle
- CSS custom properties for consistent theming
- Tailwind CSS integration
- Smooth theme transitions

## 📄 License

This project is for personal use. Feel free to use as inspiration for your own portfolio.

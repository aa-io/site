# Andrew Ambrosino - Personal Minisite

A modern, minimalist personal portfolio website built with Next.js 15 and React 19. This site showcases professional
experience, projects, and serves as a digital presence for Andrew Ambrosino.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Dark/Light Mode**: Theme switching with next-themes
- **Work Experience**: Clean display of professional background
- **Project Showcase**: Portfolio section with project details and images
- **Performance Optimized**: Leverages Next.js Turbopack for fast development
- **Accessible**: Built with Radix UI components for accessibility

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Runtime**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Tabler Icons](https://tabler.io/icons)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🏗️ Project Structure

```
minisite/
├── app/
│   ├── (pages)/
│   │   └── page.tsx          # Main homepage
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   ├── theme-provider.tsx
│   │   └── work-row.tsx      # Work experience component
│   ├── globals.css           # Global styles
│   └── layout.tsx            # Root layout
├── public/
│   ├── img/
│   │   ├── logos/            # Company logos
│   │   └── projects/         # Project screenshots
│   └── Andrew_Ambrosino_Resume.pdf
└── components.json           # shadcn/ui configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd minisite
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

Edit the `app/(pages)/page.tsx` file to add new work experiences:

```tsx
<WorkRow
  company="Company Name"
  title="Job Title"
  description="Brief description of role"
  startDate="2020"
  endDate="2023"
/>
```

### Updating Content

- **Personal Info**: Update name and title in `app/(pages)/page.tsx`
- **Resume**: Replace `public/Andrew_Ambrosino_Resume.pdf` with your resume
- **Images**: Add company logos to `public/img/logos/`
- **Projects**: Add project images to `public/img/projects/`

### Styling

The project uses Tailwind CSS for styling. Customize the theme by editing:

- `tailwind.config.js` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

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

## 📝 Todo

- [x] Fix readme
- [ ] Custom OG image
- [ ] Social links
- [ ] OG header links
- [ ] llms.txt

## 🤝 Contributing

This is a personal portfolio project, but feel free to:

- Report bugs
- Suggest improvements
- Submit pull requests

## 📄 License

This project is for personal use. Feel free to use as inspiration for your own portfolio.

---

Built with ❤️ by Andrew Ambrosino

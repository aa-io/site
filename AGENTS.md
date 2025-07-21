# Guidance for Codex Contributors

This repository contains a Next.js 15 application written in TypeScript with Tailwind CSS and shadcn/ui components. The
documents inside `.cursor/rules` describe how code should be structured and styled. Below is a summary for quick
reference.

## General Principles

- **TypeScript First** – keep `strict` mode and never use `any`.
- **Server Components By Default** – only use client components when necessary.
- **Tailwind Only** – avoid custom CSS, rely on utility classes.
- **Mobile First** – design responsive layouts starting from mobile breakpoints.
- **Accessibility** – ensure keyboard navigation and screen‑reader support.

## Repository Structure

- Use the `app/` directory for all routes and components.
- Place shared UI elements in `app/components/ui/`.
- Static assets go in `public/` and fonts in `app/assets/font/`.
- Data files live in the `data/` folder.
- API routes go in `app/api/` following App Router conventions.

## Key Features

### AI Chat Assistant

The site includes an AI-powered chat assistant that can answer questions about Andrew's background:

- Chat interface at `/chat`
- API endpoint at `/api/chat`
- Uses OpenAI's GPT-4 via Vercel AI SDK
- Custom system prompt with Andrew's professional information
- Tools for providing links to resume and social profiles

### Testing Infrastructure

Comprehensive testing with Vitest and React Testing Library:

- Component tests for UI elements
- API route tests with proper error handling
- Data validation tests
- Test coverage reporting with Codecov

## Components

- Follow functional component patterns using the `FC` type.
- Define props with TypeScript interfaces and include a `className` prop.
- Use the `cn()` utility for conditional classes.
- Export components as **named exports**.

## API Routes

- Use Next.js 15 App Router API conventions
- Implement proper error handling and validation
- Return appropriate HTTP status codes
- Use TypeScript for request/response typing
- Validate environment variables on startup

## Styling

- Organize Tailwind classes logically (layout → spacing → sizing → typography → colors → borders → transitions →
  states).
- Always provide dark‑mode variants and test light/dark themes.

## TypeScript

- Prefer `interface` for object shapes and `type` for unions or aliases.
- Type event handlers precisely, e.g. `React.MouseEvent`.
- Use generics and type guards where appropriate.

## Next.js

- Use the App Router and follow file‑based routing conventions.
- Fetch data in server components and leverage caching.
- Optimize images with the Next.js `Image` component.
- Use `next/font` for custom fonts and include metadata for SEO.

## Development Workflow

1. Review the rule files under `.cursor/rules` before implementing new features.
2. Reuse existing UI components whenever possible.
3. Test in both light and dark modes.
4. **Write and run tests for new features and bug fixes.**
5. **Ensure TypeScript, ESLint, and tests have no errors before committing.**

### Programmatic Checks

Run the linter and tests after making changes:

```bash
pnpm lint
pnpm test:run
```

If the lint command or tests fail, resolve the issues before committing.

### Continuous Integration

The project uses GitHub Actions for automated testing:

- **CI Pipeline**: Type checking, linting, testing, building, and performance testing
- **Matrix Testing**: Node.js 18.x and 20.x versions
- **Coverage Reporting**: Automatic coverage tracking with Codecov
- **Lighthouse CI**: Performance testing on pull requests

All checks must pass before merging to main branch.

**Required GitHub Secrets:**

- `OPENAI_API_KEY`: Required for API route tests and build process

## Testing

This project uses **Vitest** with React Testing Library for comprehensive testing. The testing framework covers:

- **Unit Tests**: Utility functions and individual components
- **Component Tests**: React components with user interactions
- **API Tests**: API routes and error handling
- **Data Tests**: Data structure validation
- **Integration Tests**: Component interactions

### Test Structure

Tests are organized in the `app/test/` directory:

```
app/test/
├── setup.ts                    # Global test setup and mocks
├── components/                 # Component tests
├── api/                        # API route tests
├── data/                       # Data validation tests
└── utils.test.ts               # Utility function tests
```

### Running Tests

```bash
# Run all tests once
pnpm test:run

# Run tests in watch mode
pnpm test:watch

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

Follow these patterns when writing tests:

1. **Test user-visible behavior**, not implementation details
2. **Use descriptive test names** that explain what is being tested
3. **Test both positive and negative cases**
4. **Mock external dependencies** in the setup file
5. **Focus on accessibility** using `screen.getByRole()` queries

### Test Coverage Goals

Prioritize testing for:

- Critical components (WorkRow, SocialLink, AnimateIn)
- All API routes with error handling
- Utility functions and data validation
- User interactions and form submissions
- AI chat functionality and API integration

For detailed testing guidelines, see `.cursor/rules/testing.mdc`.

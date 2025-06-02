# Scroll Header Components

A collection of React components that create beautiful scroll-to-toolbar transitions for modern web applications.

## Components

### ScrollHeader (Basic)

A simple scroll header that fades out and transitions into a fixed toolbar when scrolling.

**Features:**

- Fade out effect on scroll
- Simple parallax movement
- Fixed toolbar appearance
- Customizable scroll threshold

**Usage:**

```tsx
import { ScrollHeader } from '@/components/scroll-header';

<ScrollHeader
  title="Your Title"
  subtitle="Optional subtitle"
  toolbarHeight={64}
  className="bg-gradient-to-br from-blue-50 to-indigo-100"
>
  <Button>Call to Action</Button>
</ScrollHeader>;
```

**Props:**

- `title` (string): The main title text
- `subtitle` (string, optional): Subtitle text
- `className` (string, optional): Additional CSS classes for the header
- `toolbarHeight` (number, optional): Height of the toolbar in pixels (default: 64)
- `children` (ReactNode, optional): Content to display below the title/subtitle

### AdvancedScrollHeader

An enhanced version with more customization options and smoother animations.

**Features:**

- Scaling animation
- Performance-optimized scrolling
- Custom toolbar content
- Configurable parallax strength
- Smooth transitions
- Backdrop blur effects

**Usage:**

```tsx
import { AdvancedScrollHeader } from '@/components/advanced-scroll-header';

<AdvancedScrollHeader
  title="Your Title"
  subtitle="Optional subtitle"
  scrollThreshold={150}
  parallaxStrength={0.3}
  fadeDistance={400}
  enableParallax={true}
  toolbarContent={<CustomToolbarContent />}
>
  <Button>Call to Action</Button>
</AdvancedScrollHeader>;
```

**Props:**

- `title` (string): The main title text
- `subtitle` (string, optional): Subtitle text
- `className` (string, optional): Additional CSS classes for the header
- `toolbarClassName` (string, optional): Additional CSS classes for the toolbar
- `toolbarHeight` (number, optional): Height of the toolbar in pixels (default: 64)
- `scrollThreshold` (number, optional): Scroll position to trigger toolbar (default: 200)
- `parallaxStrength` (number, optional): Strength of parallax effect (default: 0.5)
- `fadeDistance` (number, optional): Distance over which header fades (default: 300)
- `enableParallax` (boolean, optional): Enable/disable parallax effect (default: true)
- `showToolbarBorder` (boolean, optional): Show border on toolbar (default: true)
- `toolbarContent` (ReactNode, optional): Custom content for the toolbar
- `children` (ReactNode, optional): Content to display below the title/subtitle

### useScrollPosition Hook

A custom hook that returns the current scroll position, useful for creating custom scroll-based effects.

**Usage:**

```tsx
import { useScrollPosition } from '@/components/advanced-scroll-header';

function MyComponent() {
  const scrollY = useScrollPosition();

  return <div style={{ opacity: Math.max(0, 1 - scrollY / 300) }}>Content that fades on scroll</div>;
}
```

## Demo

Use the `ScrollHeaderShowcase` component to see both versions in action:

```tsx
import { ScrollHeaderShowcase } from '@/components/scroll-header-showcase';

<ScrollHeaderShowcase />;
```

## Styling

The components use Tailwind CSS classes and are designed to work with shadcn/ui design system. They support:

- Dark/light mode
- Responsive design
- Custom gradients and backgrounds
- Backdrop blur effects
- Smooth transitions

## Performance

The advanced version includes performance optimizations:

- Throttled scroll events using `requestAnimationFrame`
- Passive event listeners
- Optimized re-renders with `useCallback`

## Browser Support

These components work in all modern browsers that support:

- CSS transforms
- CSS backdrop-filter (for blur effects)
- Intersection Observer API
- requestAnimationFrame

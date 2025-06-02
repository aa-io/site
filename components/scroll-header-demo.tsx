'use client';

import { Button } from '@/components/ui/button';
import { ScrollHeader } from './scroll-header';

export function ScrollHeaderDemo() {
  return (
    <div className="min-h-screen">
      <ScrollHeader
        title="Welcome"
        subtitle="This is a demo of the scroll header component"
        className="from-background to-muted/20 bg-gradient-to-b"
      >
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </ScrollHeader>

      {/* Demo content to enable scrolling */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-3xl font-bold">About This Component</h2>
            <p className="text-muted-foreground text-lg">
              The ScrollHeader component creates a beautiful transition effect where a large hero header gradually fades
              out and transforms into a compact toolbar header as you scroll down the page.
            </p>
          </section>

          <section>
            <h3 className="mb-4 text-2xl font-semibold">Features</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Smooth parallax scrolling effect on the main header</li>
              <li>• Automatic transition to fixed toolbar when scrolling</li>
              <li>• Customizable scroll threshold and toolbar height</li>
              <li>• Support for subtitle and custom children content</li>
              <li>• Responsive design with proper spacing</li>
              <li>• Backdrop blur effect on the toolbar</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-4 text-2xl font-semibold">Usage Example</h3>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-sm">
                {`<ScrollHeader
  title="Your Title"
  subtitle="Optional subtitle"
  toolbarHeight={64}
>
  <Button>Call to Action</Button>
</ScrollHeader>`}
              </pre>
            </div>
          </section>

          {/* Add more content to demonstrate scrolling */}
          {Array.from({ length: 10 }, (_, i) => (
            <section key={i}>
              <h3 className="mb-4 text-xl font-semibold">Section {i + 1}</h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

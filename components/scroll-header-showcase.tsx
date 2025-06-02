'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AdvancedScrollHeader } from './advanced-scroll-header';
import { ScrollHeader } from './scroll-header';

export function ScrollHeaderShowcase() {
  const [activeDemo, setActiveDemo] = useState<'basic' | 'advanced'>('basic');

  const BasicDemo = () => (
    <div className="min-h-screen">
      <ScrollHeader
        title="Basic Scroll Header"
        subtitle="Simple and elegant scroll-to-toolbar transition"
        className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20"
      >
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </ScrollHeader>
      <DemoContent />
    </div>
  );

  const AdvancedDemo = () => (
    <div className="min-h-screen">
      <AdvancedScrollHeader
        title="Advanced Scroll Header"
        subtitle="Enhanced with parallax, scaling, and custom toolbar content"
        className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20"
        scrollThreshold={150}
        parallaxStrength={0.3}
        fadeDistance={400}
        enableParallax={true}
        toolbarContent={
          <div className="flex items-center gap-2">
            <span className="bg-secondary rounded-full px-2 py-1 text-xs">v2.0</span>
            <Button size="sm" variant="ghost">
              Menu
            </Button>
          </div>
        }
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Try Advanced
          </Button>
          <Button variant="outline" size="lg">
            Documentation
          </Button>
        </div>
      </AdvancedScrollHeader>
      <DemoContent />
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Demo Selector */}
      <div className="fixed top-4 right-4 z-[60]">
        <div className="bg-background w-64 rounded-lg border p-4 shadow-lg">
          <h3 className="mb-2 text-sm font-semibold">Demo Selector</h3>
          <p className="text-muted-foreground mb-4 text-xs">Choose which scroll header to preview</p>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={activeDemo === 'basic' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('basic')}
            >
              Basic
            </Button>
            <Button
              size="sm"
              variant={activeDemo === 'advanced' ? 'default' : 'outline'}
              onClick={() => setActiveDemo('advanced')}
            >
              Advanced
            </Button>
          </div>
        </div>
      </div>

      {/* Render selected demo */}
      {activeDemo === 'basic' ?
        <BasicDemo />
      : <AdvancedDemo />}
    </div>
  );
}

function DemoContent() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-12">
        <section>
          <h2 className="mb-6 text-3xl font-bold">Scroll Header Components</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-card rounded-lg border p-6">
              <div className="mb-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  Basic Version
                  <span className="rounded border px-2 py-1 text-xs">Simple</span>
                </h3>
                <p className="text-muted-foreground text-sm">Clean and straightforward scroll-to-toolbar transition</p>
              </div>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Fade out effect on scroll</li>
                <li>• Simple parallax movement</li>
                <li>• Fixed toolbar appearance</li>
                <li>• Customizable threshold</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <div className="mb-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  Advanced Version
                  <span className="rounded border px-2 py-1 text-xs">Enhanced</span>
                </h3>
                <p className="text-muted-foreground text-sm">Feature-rich with advanced animations and customization</p>
              </div>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Scaling animation</li>
                <li>• Performance-optimized scrolling</li>
                <li>• Custom toolbar content</li>
                <li>• Configurable parallax strength</li>
                <li>• Smooth transitions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-2xl font-semibold">Implementation</h3>
          <div className="bg-card rounded-lg border p-6">
            <h4 className="mb-4 text-lg font-semibold">Basic Usage</h4>
            <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm">
              {`import { ScrollHeader } from '@/components/scroll-header';

<ScrollHeader
  title="Your Title"
  subtitle="Optional subtitle"
  toolbarHeight={64}
>
  <Button>Call to Action</Button>
</ScrollHeader>`}
            </pre>
          </div>
        </section>

        <section>
          <div className="bg-card rounded-lg border p-6">
            <h4 className="mb-4 text-lg font-semibold">Advanced Usage</h4>
            <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm">
              {`import { AdvancedScrollHeader } from '@/components/advanced-scroll-header';

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
</AdvancedScrollHeader>`}
            </pre>
          </div>
        </section>

        {/* Additional content for scrolling demonstration */}
        {Array.from({ length: 8 }, (_, i) => (
          <section key={i}>
            <h3 className="mb-4 text-xl font-semibold">Demo Section {i + 1}</h3>
            <div className="bg-card rounded-lg border p-6">
              <p className="text-muted-foreground">
                This is demo content to showcase the scroll behavior. As you scroll down, notice how the large header
                transitions smoothly into a compact toolbar. The effect is designed to provide a seamless user
                experience while maintaining visual hierarchy and navigation accessibility.
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

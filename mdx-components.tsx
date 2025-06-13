import { ReactNode } from 'react';

// Define a simple type for MDX components
type MDXComponents = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.ComponentType<any>;
};

// Helper function to generate heading IDs
function generateHeadingId(children: ReactNode): string {
  const text =
    typeof children === 'string' ? children
    : Array.isArray(children) ? children.join('')
    : children?.toString() || '';

  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    // Custom components
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Row: (props: any) => <div {...props} />,

    // Typography
    h1: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h1 id={id} className="mt-12 mb-8 text-4xl font-bold tracking-tight first:mt-0">
          {children}
        </h1>
      );
    },
    h2: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h2 id={id} className="mt-10 mb-6 text-3xl font-semibold tracking-tight first:mt-0">
          {children}
        </h2>
      );
    },
    h3: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h3 id={id} className="mt-8 mb-4 text-2xl font-semibold tracking-tight first:mt-0">
          {children}
        </h3>
      );
    },
    h4: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h4 id={id} className="mt-6 mb-3 text-xl font-semibold tracking-tight">
          {children}
        </h4>
      );
    },
    h5: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h5 id={id} className="mt-6 mb-3 text-lg font-semibold tracking-tight">
          {children}
        </h5>
      );
    },
    h6: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h6 id={id} className="mt-6 mb-3 text-base font-semibold tracking-tight">
          {children}
        </h6>
      );
    },

    // Paragraphs and text
    p: ({ children }: { children: ReactNode }) => (
      <p className="mb-6 leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),

    // Lists
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 [&>li]:mt-2">{children}</ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 [&>li]:mt-2">{children}</ol>
    ),
    li: ({ children }: { children: ReactNode }) => <li className="leading-7">{children}</li>,

    // Links
    a: ({ children, href }: { children: ReactNode; href?: string }) => (
      <a
        className="text-primary hover:text-primary/80 font-medium underline decoration-1 underline-offset-4 transition-colors"
        href={href}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),

    // Emphasis
    strong: ({ children }: { children: ReactNode }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: { children: ReactNode }) => <em className="italic">{children}</em>,

    // Code
    code: ({ children }: { children: ReactNode }) => (
      <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {children}
      </code>
    ),
    pre: ({ children }: { children: ReactNode }) => (
      <pre className="bg-muted mb-6 overflow-x-auto rounded-lg p-4">
        <code className="bg-muted relative rounded font-mono text-sm">{children}</code>
      </pre>
    ),

    // Blockquotes
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="border-border text-muted-foreground mb-6 border-l-4 pl-6 italic">{children}</blockquote>
    ),

    // Horizontal rule
    hr: () => <hr className="border-border my-8" />,

    // Footnotes (for remark-gfm)
    sup: ({ children }: { children: ReactNode }) => <sup className="text-xs">{children}</sup>,

    // Footnote section styling
    section: ({ children, ...props }: { children: ReactNode } & React.HTMLAttributes<HTMLElement>) => {
      // Check if this is a footnotes section
      const isFootnotes = (props as { 'data-footnotes'?: boolean })['data-footnotes'] === true;
      return (
        <section
          {...props}
          className={isFootnotes ? 'border-border text-muted-foreground mt-8 border-t pt-4 text-sm' : ''}
        >
          {children}
        </section>
      );
    },

    // Tables
    table: ({ children }: { children: ReactNode }) => (
      <div className="mb-6 overflow-x-auto">
        <table className="border-border w-full border-collapse border">{children}</table>
      </div>
    ),
    thead: ({ children }: { children: ReactNode }) => <thead className="bg-muted">{children}</thead>,
    tbody: ({ children }: { children: ReactNode }) => <tbody>{children}</tbody>,
    tr: ({ children }: { children: ReactNode }) => <tr className="border-border border-b">{children}</tr>,
    th: ({ children }: { children: ReactNode }) => (
      <th className="border-border border px-4 py-2 text-left font-semibold">{children}</th>
    ),
    td: ({ children }: { children: ReactNode }) => <td className="border-border border px-4 py-2">{children}</td>,

    ...components,
  };
}

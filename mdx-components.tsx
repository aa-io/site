import Image from 'next/image';
import { ReactNode } from 'react';
import { Tag, Tags } from './app/components/tag';

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
    Tag: (props: any) => <Tag {...props} />,
    Tags: (props: any) => <Tags {...props} />,

    // Cover component for images with captions
    Cover: ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
      <figure className="my-3 w-full max-w-full first:mt-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
        {caption && (
          <figcaption className="text-muted-foreground mt-2 -mb-2 text-center text-xs break-words">
            {caption}
          </figcaption>
        )}
      </figure>
    ),

    // Typography
    h1: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h1
          id={id}
          className="mt-[calc(var(--md-spacing)*6)] mb-[calc(var(--md-spacing)*2)] text-5xl font-medium first:mt-0"
        >
          {children}
        </h1>
      );
    },
    h2: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h2 className="mt-[calc(var(--md-spacing)*4)] mb-[var(--md-spacing)] first:mt-0" id={id}>
          {children}
        </h2>
      );
    },
    h3: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h3 className="mt-[calc(var(--md-spacing)*3)] mb-[var(--md-spacing)] first:mt-0" id={id}>
          {children}
        </h3>
      );
    },
    h4: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h4 className="mt-[calc(var(--md-spacing)*2)] mb-[var(--md-spacing)] first:mt-0" id={id}>
          {children}
        </h4>
      );
    },
    h5: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return (
        <h5 className="mt-[calc(var(--md-spacing)*1)] mb-[var(--md-spacing)] first:mt-0" id={id}>
          {children}
        </h5>
      );
    },
    h6: ({ children }: { children: ReactNode }) => {
      const id = generateHeadingId(children);
      return <h6 id={id}>{children}</h6>;
    },

    // Paragraphs and text
    p: ({ children }: { children: ReactNode }) => (
      <p className="my-[var(--md-spacing)] max-w-full leading-relaxed break-words">{children}</p>
    ),

    // Lists
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="my-[var(--md-spacing)] ml-4 max-w-full list-disc space-y-[var(--md-spacing)/2] sm:ml-[var(--md-spacing)] [&>li]:mt-[var(--md-spacing)/2]">
        {children}
      </ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <ol className="my-[var(--md-spacing)] ml-4 max-w-full list-decimal space-y-[var(--md-spacing)/2] sm:ml-[var(--md-spacing)] [&>li]:mt-[var(--md-spacing)/2]">
        {children}
      </ol>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <li className="max-w-full pl-1 leading-normal sm:pl-[calc(var(--md-spacing)/3)] [&_ol]:mt-[calc(var(--md-spacing)/2)] [&_ul]:mt-[calc(var(--md-spacing)/2)]">
        {children}
      </li>
    ),

    // Links
    a: ({ children, href }: { children: ReactNode; href?: string }) => (
      <a
        className="uline hover:text-foreground/75 !decoration-muted-foreground"
        href={href}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),

    // Emphasis
    strong: ({ children }: { children: ReactNode }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: { children: ReactNode }) => <em className="text-muted-foreground italic">{children}</em>,

    // Code
    code: ({ children }: { children: ReactNode }) => (
      <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold break-words">
        {children}
      </code>
    ),
    pre: ({ children }: { children: ReactNode }) => (
      <pre className="bg-muted mb-6 max-w-full overflow-x-auto rounded-lg p-2 sm:p-4">
        <code className="bg-muted relative rounded font-mono text-xs break-words sm:text-sm">{children}</code>
      </pre>
    ),

    // Blockquotes
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="border-border text-muted-foreground mb-6 border-l-4 pl-6 italic">{children}</blockquote>
    ),

    // Horizontal rule
    hr: () => <hr className="border-border mx-auto my-[calc(var(--md-spacing)*3)] max-w-xl" />,

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
      <div className="mb-6 max-w-full overflow-x-auto">
        <table className="border-border w-full min-w-full border-collapse border">{children}</table>
      </div>
    ),
    thead: ({ children }: { children: ReactNode }) => <thead className="bg-muted">{children}</thead>,
    tbody: ({ children }: { children: ReactNode }) => <tbody>{children}</tbody>,
    tr: ({ children }: { children: ReactNode }) => <tr className="border-border border-b">{children}</tr>,
    th: ({ children }: { children: ReactNode }) => (
      <th className="border-border border px-2 py-2 text-left text-xs font-semibold break-words sm:px-4 sm:text-sm">
        {children}
      </th>
    ),
    td: ({ children }: { children: ReactNode }) => (
      <td className="border-border border px-2 py-2 text-xs break-words sm:px-4 sm:text-sm">{children}</td>
    ),

    ...components,
  };
}

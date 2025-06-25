import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostFrontmatter {
  title: string;
  date?: string;
  description?: string;
  [key: string]: any;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export function getMDXPost(filePath: string): Post | null {
  try {
    const fullPath = path.resolve(filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const slug = path.basename(path.dirname(fullPath));

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
    };
  } catch (error) {
    console.error('Error reading MDX file:', error);
    return null;
  }
}

export function getWorkPosts(): Post[] {
  const workDir = path.join(process.cwd(), 'app/(pages)/work');
  const entries = fs.readdirSync(workDir, { withFileTypes: true });

  const posts: Post[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const mdxPath = path.join(workDir, entry.name, 'page.mdx');
      if (fs.existsSync(mdxPath)) {
        const post = getMDXPost(mdxPath);
        if (post) {
          posts.push(post);
        }
      }
    }
  }

  return posts;
}

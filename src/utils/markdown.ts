import { marked } from 'marked';

/**
 * Parst einen Markdown-String zu HTML.
 * Wird für CMS-Content aus Frontmatter-Feldern verwendet.
 */
export async function renderMarkdown(md: string): Promise<string> {
  if (!md) return '';
  return marked.parse(md, { async: true });
}

import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

type ReactMarkdownProps = Parameters<typeof ReactMarkdown>[0];

export type MarkdownProps = ReactMarkdownProps;

export const Markdown: FC<MarkdownProps> = ({ ...props }) => {
  return <ReactMarkdown remarkPlugins={[remarkFrontmatter]} {...props} />;
};

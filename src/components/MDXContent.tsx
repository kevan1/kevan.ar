import ReactMarkdown, { Components } from "react-markdown";
import { highlight } from "sugar-high";

type MarkdownContentProps = {
  source: string;
};

function Code({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"code">) {
  const code = String(children ?? "");
  const codeHTML = highlight(code);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components: Components = {
  code: Code,
};

export default function MDXContent({ source }: MarkdownContentProps) {
  return <ReactMarkdown components={components}>{source}</ReactMarkdown>;
}

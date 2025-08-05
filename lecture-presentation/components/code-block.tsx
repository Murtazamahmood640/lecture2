{
  ;`import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
}

export function CodeBlock({ code, className, ...props }: CodeBlockProps) {
  return (
    <pre
      className={cn(
        "relative rounded-lg bg-gray-800 p-4 text-sm text-gray-50 overflow-x-auto font-mono",
        className
      )}
      {...props}
    >
      <code>{code}</code>
    </pre>
  );
}`
}

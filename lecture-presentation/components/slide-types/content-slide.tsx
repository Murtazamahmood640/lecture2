{
  ;`import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { CheckCircle } from 'lucide-react';

interface ContentSlideProps {
  title: string;
  points: string[];
  analogy?: string;
  code?: string;
  example?: string;
}

export function ContentSlide({
  title,
  points,
  analogy,
  code,
  example,
}: ContentSlideProps) {
  return (
    <Card className="flex flex-col p-8 w-full h-full bg-white">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
        <div className="flex flex-col justify-center">
          <ul className="space-y-3 text-lg text-gray-700">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          {analogy && (
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800 italic rounded-md">
              <p>{analogy}</p>
            </div>
          )}
        </div>
        {(code || example) && (
          <div className="flex flex-col justify-center">
            {code && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Code Example:</h3>
                <CodeBlock code={code} />
              </div>
            )}
            {example && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Example:</h3>
                <CodeBlock code={example} />
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}`
}

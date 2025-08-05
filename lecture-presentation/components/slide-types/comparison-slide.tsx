{
  ;`import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { CheckCircle } from 'lucide-react';

interface ComparisonSlideProps {
  title: string;
  left: {
    title: string;
    points?: string[];
    code: string;
  };
  right: {
    title: string;
    points?: string[];
    code: string;
  };
}

export function ComparisonSlide({ title, left, right }: ComparisonSlideProps) {
  return (
    <Card className="flex flex-col p-8 w-full h-full bg-white">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">
            {left.title}
          </h3>
          {left.points && (
            <ul className="space-y-2 text-lg text-gray-700 mb-4 text-left w-full">
              {left.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          <CodeBlock code={left.code} className="w-full" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            {right.title}
          </h3>
          {right.points && (
            <ul className="space-y-2 text-lg text-gray-700 mb-4 text-left w-full">
              {right.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          <CodeBlock code={right.code} className="w-full" />
        </div>
      </div>
    </Card>
  );
}`
}

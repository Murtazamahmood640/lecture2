{
  ;`import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { Lightbulb } from 'lucide-react';

interface DemoSlideProps {
  title: string;
  steps: string[];
  code?: string;
  components?: string[];
}

export function DemoSlide({ title, steps, code, components }: DemoSlideProps) {
  return (
    <Card className="flex flex-col p-8 w-full h-full bg-white">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
        <div className="flex flex-col justify-center">
          {steps.length > 0 && (
            <>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                {steps.map((step, index) => (
                  <li key={index}>
                    <span className="font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </>
          )}
          {components && components.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Components:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                {components.map((comp, index) => (
                  <li key={index}>{comp}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {code && (
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Code:</h3>
            <CodeBlock code={code} />
          </div>
        )}
      </div>
    </Card>
  );
}`
}

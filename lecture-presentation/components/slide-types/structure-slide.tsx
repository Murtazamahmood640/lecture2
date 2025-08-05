{
  ;`import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { Folder, FunctionSquare, FileText, Share2 } from 'lucide-react';

interface StructureSlideProps {
  title: string;
  parts: {
    name: string;
    description: string;
    code: string;
  }[];
}

export function StructureSlide({ title, parts }: StructureSlideProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Import":
        return <FileText className="h-6 w-6 text-yellow-600" />;
      case "Function":
        return <FunctionSquare className="h-6 w-6 text-green-600" />;
      case "Return":
        return <Share2 className="h-6 w-6 text-purple-600" />;
      case "Export":
        return <Folder className="h-6 w-6 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <Card className="flex flex-col p-8 w-full h-full bg-white">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow">
        {parts.map((part, index) => (
          <Card
            key={index}
            className="flex flex-col p-5 bg-orange-50 border-orange-200 shadow-sm"
          >
            <div className="flex items-center mb-3">
              {getIcon(part.name)}
              <h3 className="text-xl font-semibold text-orange-700 ml-3">
                {part.name}
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm flex-grow">
              {part.description}
            </p>
            <CodeBlock code={part.code} className="text-xs" />
          </Card>
        ))}
      </div>
    </Card>
  );
}`
}

{
  ;`import { Card } from "@/components/ui/card";

interface TitleSlideProps {
  title: string;
  subtitle: string;
  description: string;
}

export function TitleSlide({ title, subtitle, description }: TitleSlideProps) {
  return (
    <Card className="flex flex-col items-center justify-center p-8 text-center w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
        {title}
      </h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-6">
        {subtitle}
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl">
        {description}
      </p>
    </Card>
  );
}`
}

import type { Slide, SlideContent } from "@/data/slides"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SlideRendererProps {
  slide: Slide
}

export default function SlideRenderer({ slide }: SlideRendererProps) {
  const renderContent = (content: SlideContent) => {
    switch (content.type) {
      case "title":
        return (
          <div className="text-center py-12 md:py-20 w-full">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-4 leading-tight">{slide.title}</h1>
            <h2 className="text-xl md:text-3xl text-gray-600 mb-6">{content.subtitle}</h2>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">{content.description}</p>
          </div>
        )
      case "content":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col justify-center">
              <ul className="space-y-4 text-lg text-gray-700">
                {content.points.map((point, index) => (
                  <li
                    key={index}
                    className="relative pl-8 before:content-['•'] before:absolute before:left-0 before:text-blue-500 before:font-bold before:text-2xl"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              {content.analogy && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 text-blue-800 italic text-base">
                  <p>{content.analogy}</p>
                </div>
              )}
            </div>
            {content.code && (
              <div className="bg-gray-800 text-blue-300 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
                <pre>{content.code}</pre>
              </div>
            )}
            {content.example && (
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Example:</h4>
                <pre className="bg-gray-800 text-blue-300 p-4 rounded-md overflow-x-auto text-sm font-mono">
                  {content.example}
                </pre>
              </div>
            )}
          </div>
        )
      case "comparison":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Card className="border-red-300 bg-red-50">
              <CardHeader>
                <CardTitle className="text-center text-red-600">{content.left.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {content.left.points && (
                  <ul className="mb-4 space-y-2 text-gray-700">
                    {content.left.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <pre className="bg-gray-800 text-blue-300 p-4 rounded-md overflow-x-auto text-sm font-mono">
                  {content.left.code}
                </pre>
              </CardContent>
            </Card>
            <Card className="border-green-300 bg-green-50">
              <CardHeader>
                <CardTitle className="text-center text-green-600">{content.right.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {content.right.points && (
                  <ul className="mb-4 space-y-2 text-gray-700">
                    {content.right.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                <pre className="bg-gray-800 text-blue-300 p-4 rounded-md overflow-x-auto text-sm font-mono">
                  {content.right.code}
                </pre>
              </CardContent>
            </Card>
          </div>
        )
      case "demo":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Steps:</h3>
              <ol className="space-y-3 text-lg text-gray-700">
                {content.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-3 text-sm font-bold text-white bg-blue-500 rounded-full flex-shrink-0">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              {content.components && (
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Components:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {content.components.map((comp, index) => (
                      <li key={index}>{comp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {content.code && (
              <div className="bg-gray-800 text-blue-300 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
                <pre>{content.code}</pre>
              </div>
            )}
          </div>
        )
      case "structure":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {content.parts?.map((part, index) => (
              <Card key={index} className="bg-orange-50 border-orange-300">
                <CardHeader>
                  <CardTitle className="text-orange-600">{part.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-3">{part.description}</p>
                  <pre className="bg-gray-800 text-blue-300 p-3 rounded-md overflow-x-auto text-xs font-mono">
                    {part.code}
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      default:
        return <p className="text-red-500 text-center">Slide content not found or unsupported type.</p>
    }
  }

  return (
    <Card className="w-full max-w-4xl min-h-[500px] flex flex-col justify-center items-center p-8 md:p-12 shadow-xl rounded-xl bg-white">
      <CardHeader className="w-full text-center pb-8">
        <CardTitle className="text-3xl md:text-4xl font-bold text-gray-800">{slide.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center w-full">
        {renderContent(slide.content)}
      </CardContent>
    </Card>
  )
}

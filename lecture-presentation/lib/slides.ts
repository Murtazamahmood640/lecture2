{
  `export type Slide =
  | {
      type: "title";
      title: string;
      content: {
        subtitle: string;
        description: string;
      };
    }
  | {
      type: "content";
      title: string;
      content: {
        points: string[];
        analogy?: string;
        code?: string;
        example?: string;
      };
    }
  | {
      type: "comparison";
      title: string;
      content: {
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
      };
    }
  | {
      type: "demo";
      title: string;
      content: {
        steps: string[];
        code?: string;
        components?: string[]; // Added for the "Building a Complete SPA Layout" slide
      };
    }
  | {
      type: "structure";
      title: string;
      content: {
        parts: {
          name: string;
          description: string;
          code: string;
        }[];
      };
    };

export const lectureSlides: Slide[] = [
  {
    title: "Lecture 2: Bootstrap & Components",
    type: "title",
    content: {
      subtitle: "Styling React Apps with Bootstrap",
      description: "Learn to integrate Bootstrap and create reusable components",
    },
  },
  {
    title: "What is Bootstrap?",
    type: "content",
    content: {
      points: [
        "🎨 Popular CSS framework",
        "📱 Mobile-first responsive design",
        "⚡ Pre-built UI components",
        "🔧 Easy to integrate and customize",
        "💼 Used by millions of websites",
      ],
    },
  },
  {
    title: "Adding Bootstrap CDN",
    type: "demo",
    content: {
      steps: [
        "Open public/index.html",
        "Add Bootstrap CSS link in <head>",
        "Add Bootstrap JS before closing </body>",
        "Save and refresh your app",
      ],
      code: \`<!-- In public/index.html -->
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div id="root"></div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>`,
}
,
  },\
{
    title: "Bootstrap in React - Key Differences",
    type: \"comparison",
    content: 
      {
        title: "HTML",
        code: \`<div class=\"container">\
  <button class=\"btn btn-primary">\
    Click me\
  </button>\
</div>\`,\
      },\
      right: 
        title: "React JSX",
        code: \`<div className="container">
  <button className="btn btn-primary">
    Click me
  </button>
</div>`,,
    },\,\\
    title: "What are Components?",
    type: "content",
    content: \
      points: [
        "🧩 Reusable pieces of UI",
        "🏗️ Building blocks of React apps",
        "📦 Encapsulate HTML, CSS, and logic",
        "🔄 Can be used multiple times",
        "⚙️ Accept props for customization",
      ],
      analogy:
        "Think of components like LEGO blocks - you can combine them to build complex structures!",,,
    title: \"Component Structure",
    type: "structure",
    content: 
      parts: [\
        {
          name: \"Import",\
          description: \"Bring in dependencies\",
          code: \"import React from \'react'",
        },
        {\
          name: "Function",\
          description: \"Component logic",\
          code: "function MyComponent() {",
        },
        {
          name: "Return",
          description: "JSX to render",
          code: "return <div>Hello</div>",
        },
        {
          name: "Export",
          description: "Make available to other files",
          code: "export default MyComponent",
        },
      ],,,
    title: "Creating Your First Component",
    type: "demo",
    content: {
      steps: [
        "Create src/components/Header.jsx",
        "Write the component function",
        "Return JSX with Bootstrap classes",
        "Export the component",
        "Import in App.jsx",
        "Use the component",
      ],
      code: `// src/components/Header.jsx
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">My App</a>
      </div>
    </nav>
  )
}
export default Header`,
    },
  },
  {
    title: "Using Components in App.jsx",
    type: "demo",
    content: {
      steps: [], // No specific steps for this slide, just showing code
      code: `// src/App.jsx
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1>Welcome to My App!</h1>
      </div>
    </div>
  )
}
export default App`,
    },
  },
  {
    title: "Building a Complete SPA Layout",
    type: "demo",
    content: {
      components: [
        "Header - Navigation bar",
        "Hero - Main banner section",
        "Features - Service cards",
        "Footer - Contact information",
      ],
      steps: [], // No specific steps for this slide
      code: `// Complete SPA structure
<div>
  <Header />
  <Hero />
  <Features />
  <Footer />
</div>`,
    },,
];`}

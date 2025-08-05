export type SlideContent =
  | { type: "title"; subtitle: string; description: string }
  | { type: "content"; points: string[]; analogy?: string; code?: string; example?: string }
  | {
      type: "comparison"
      left: { title: string; code: string; points?: string[] }
      right: { title: string; code: string; points?: string[] }
    }
  | { type: "demo"; steps: string[]; code?: string; components?: string[] }
  | {
      type: "structure"
      parts?: { name: string; description: string; code: string }[]
    }

export interface Slide {
  title: string
  type: string
  content: SlideContent
}

export const lectureSlides: Slide[] = [
  {
    title: "Lecture 2: Bootstrap & Components",
    type: "title",
    content: {
      type: "title",
      subtitle: "Integrating Bootstrap and Building React Components",
      description: "A focused guide on using Bootstrap for styling and creating reusable React UI.",
    },
  },
  {
    title: "What is Bootstrap?",
    type: "content",
    content: {
      type: "content",
      points: [
        "🎨 Popular CSS framework for responsive, mobile-first web development.",
        "⚡ Provides pre-built UI components (buttons, forms, navbars, etc.).",
        "🔧 Simplifies styling with ready-to-use CSS classes.",
        "💼 Widely used for rapid prototyping and consistent design.",
      ],
    },
  },
  {
    title: "Connecting Bootstrap: CDN Method",
    type: "demo",
    content: {
      type: "demo",
      steps: [
        "Open your `public/index.html` file (or the main HTML file of your project).",
        "Paste the Bootstrap CSS link in the `<head>` section.",
        "Paste the Bootstrap JavaScript bundle link just before the closing `</body>` tag.",
        "This makes Bootstrap styles and functionalities available globally.",
      ],
      code: `<!-- In public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Bootstrap App</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div id="root"></div> <!-- Your React app mounts here -->

    <!-- Bootstrap JS Bundle (Popper included) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
    },
  },
  {
    title: "Bootstrap in React: `class` vs `className`",
    type: "comparison",
    content: {
      type: "comparison",
      left: {
        title: "Standard HTML",
        code: `<div class="container">
  <button class="btn btn-primary">
    Click me
  </button>
</div>`,
        points: ["Uses the `class` attribute for CSS classes."],
      },
      right: {
        title: "React JSX",
        code: `<div className="container">
  <button className="btn btn-primary">
    Click me
  </button>
</div>`,
        points: [
          "Uses the `className` attribute instead of `class`.",
          "This is because `class` is a reserved keyword in JavaScript.",
          "Otherwise, Bootstrap classes are used directly as strings.",
        ],
      },
    },
  },
  {
    title: "What are Components?",
    type: "content",
    content: {
      type: "content",
      points: [
        "🧩 **Reusable Pieces of UI**: Self-contained blocks of code that render a part of your user interface.",
        "🏗️ **Building Blocks**: React apps are built by composing many components together.",
        "📦 **Encapsulate Logic & UI**: Each component can have its own state, logic, and rendering instructions.",
        "🔄 **Used Multiple Times**: Define once, use anywhere in your application.",
        "⚙️ **Accept Props**: Customizable via 'props' (properties) passed from parent components.",
      ],
      analogy:
        "Think of components like LEGO blocks – you can combine them to build complex structures, and each block (component) has a specific shape and function.",
    },
  },
  {
    title: "Component Structure",
    type: "structure",
    content: {
      type: "structure",
      parts: [
        {
          name: "Import Statements",
          description: "Bring in necessary modules (e.g., React, other components, hooks).",
          code: "import React from 'react';",
        },
        {
          name: "Function Definition",
          description: "A functional component is a JavaScript function that returns JSX.",
          code: "function MyComponent(props) {",
        },
        {
          name: "Return JSX",
          description: "The JSX (JavaScript XML) describes what the component renders.",
          code: "  return (\n    <div>Hello World</div>\n  );",
        },
        {
          name: "Export Statement",
          description: "Makes the component available for import and use in other files.",
          code: "export default MyComponent;",
        },
      ],
    },
  },
  {
    title: "Creating Your First Component (Header)",
    type: "demo",
    content: {
      type: "demo",
      steps: [
        "Create a new file: `components/header.tsx`.",
        "Define a functional component named `Header`.",
        "Inside, return JSX for a Bootstrap Navbar.",
        "Use `className` for all Bootstrap classes.",
        "Export the `Header` component.",
      ],
      code: `// components/header.tsx
import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">My App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}`,
    },
  },
  {
    title: "Using Components in `app/page.tsx`",
    type: "demo",
    content: {
      type: "demo",
      steps: [
        "Open your main application file, e.g., `app/page.tsx`.",
        "Import the `Header` component you just created.",
        "Include the `<Header />` component within your page's JSX.",
        "This will render the Header wherever you place it.",
      ],
      code: `// app/page.tsx
'use client'; // Mark as client component if using hooks or interactivity

import Header from '@/components/header'; // Adjust path if needed

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* Your Bootstrap Header component */}
      <main className="flex-grow container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Bootstrap App!</h1>
        <p className="text-lg text-gray-600">This page uses a reusable Header component styled with Bootstrap.</p>
        <button className="btn btn-success mt-4">Learn More</button>
      </main>
    </div>
  );
}`,
    },
  },
  {
    title: "Building a Complete SPA Layout with Bootstrap",
    type: "demo",
    content: {
      type: "demo",
      steps: [
        "Define separate components for different sections (e.g., `Hero`, `Features`, `Footer`).",
        "Style each component using Bootstrap classes.",
        "Import and compose these components in your main `app/page.tsx` to build the full Single Page Application layout.",
      ],
      components: [
        "Header - Navigation bar (e.g., `navbar`, `bg-primary`)",
        "Hero - Main banner section (e.g., `jumbotron`, `text-center`)",
        "Features - Service cards (e.g., `card`, `row`, `col`)",
        "Footer - Contact information (e.g., `bg-dark`, `text-white`)",
      ],
      code: `// Conceptual app/page.tsx for a full SPA
'use client';

import Header from '@/components/header';
import Hero from '@/components/hero'; // You would create this
import Features from '@/components/features'; // You would create this
import Footer from '@/components/footer'; // You would create this

export default function SpaLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}`,
    },
  },
]

# Portfolio Site Project Setup Guide

## Initial Setup Steps

### 1. Create Project with Vite
```bash
# Create new project with Vite
npm create vite@latest portfolio-site -- --template react-ts
cd portfolio-site

# Install core dependencies
npm install

# Start development server to verify setup
npm run dev
```

### 2. Add TailwindCSS
```bash
# Install Tailwind and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# Generate Tailwind and PostCSS config files
npx tailwindcss init -p
```

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind directives to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Add React Router
```bash
# Install React Router
npm install react-router-dom
```

## Project Structure
```
portfolio-site/
├── docs/               # Project documentation
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable components
│   ├── pages/        # Page components
│   ├── styles/       # Global styles
│   ├── App.tsx       # Root component
│   └── main.tsx      # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Incremental Development Guide

### Phase 1: Basic Setup & Routing
**Goal**: Set up basic routing and layout structure
1. Create basic page components (Home, About, Projects, Contact)
2. Implement basic routing
3. Create layout component

Prompt template for help:
```
"I'm working on [specific component/feature]. Here's my current implementation:

[your code]

I'm trying to [specific goal]. Can you help me understand [specific question]?"
```

### Phase 2: Styling & Layout
**Goal**: Implement responsive design and styling
1. Set up TailwindCSS utility classes
2. Create responsive navigation
3. Implement layout patterns

### Phase 3: Components & Features
**Goal**: Build core functionality
1. Create reusable components
2. Implement interactive features
3. Add animations and transitions

### Phase 4: Polish & Optimization
**Goal**: Optimize and enhance the site
1. Implement performance optimizations
2. Add error boundaries
3. Enhance accessibility

## Development Workflow

1. **Plan First**
   - Decide what feature/component you want to build
   - Sketch out the basic structure
   - List the requirements

2. **Implement Independently**
   - Try to implement the feature yourself
   - Use documentation resources:
     - [React Docs](https://react.dev/)
     - [TailwindCSS Docs](https://tailwindcss.com/docs)
     - [React Router Docs](https://reactrouter.com/en/main)
     - [TypeScript Docs](https://www.typescriptlang.org/docs/)

3. **Seek Clarification**
   When stuck, ask specific questions about:
   - Concepts you don't understand
   - Error messages
   - Best practices
   - Code optimization

4. **Iterate & Refine**
   - Get basic functionality working first
   - Add styling and polish
   - Optimize and refactor

## Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Dependencies
npm install [package]          # Install a package
npm install -D [package]       # Install dev dependency
```

## Asking for Help

When asking for help, include:
1. What you're trying to achieve
2. What you've tried
3. Specific error messages
4. Relevant code snippets

Example:
```
"I'm implementing the navigation menu. I've tried using Tailwind's flex utilities:

[code snippet]

but I can't get the items to align properly. How can I center them vertically?"
```

## Resources

### Official Documentation
- [Vite Guide](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Router Documentation](https://reactrouter.com/en/main)

### Learning Resources
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TailwindCSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### Best Practices
- Write small, focused components
- Use TypeScript interfaces for props
- Follow the DRY principle
- Comment complex logic
- Use semantic HTML
- Ensure responsive design
- Maintain accessibility

## Next Steps

1. Start with basic routing setup
2. Create a simple layout component
3. Add navigation
4. Style with TailwindCSS
5. Add features incrementally

Remember: The goal is to learn and understand each part of the development process. Take time to experiment and understand why things work the way they do.

## React Router Configuration

### Basic Router Setup
```typescript
// src/main.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### Using createRoutesFromElements
```typescript
// src/main.tsx
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
```

### Key Concepts
1. **Route Properties**:
   - `path`: URL path for the route
   - `element`: Component to render
   - `index`: Boolean for default child route
   - `children`: Nested routes

2. **Layout Pattern**:
   - Parent route with `Layout` component
   - Child routes rendered in `Outlet`
   - Shared navigation and structure

3. **Outlet Component**:
```typescript
// src/components/Layout.tsx
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>{/* Navigation */}</nav>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
};
```

4. **Navigation**:
```typescript
import { Link, NavLink } from 'react-router-dom';

// Basic link
<Link to="/about">About</Link>

// Active state link
<NavLink 
  to="/about"
  className={({ isActive }) => isActive ? 'text-coral' : ''}
>
  About
</NavLink>
```

### Error Handling
```typescript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // Global error boundary
    children: [
      {
        path: "projects/:id",
        element: <ProjectDetail />,
        errorElement: <ProjectError />, // Route-specific error
      },
    ],
  },
]);
```

### Loading States
```typescript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "projects",
        element: <Projects />,
        loader: projectsLoader, // Data loading
        loadingElement: <LoadingSpinner />,
      },
    ],
  },
]);
``` 
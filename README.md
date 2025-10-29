## Task

Link to document: https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0

## How to Run the App

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vidfefe/calculator.git
cd calculator
```

2. Install dependencies:
```bash
npm install
```

3. Initialize Husky (for pre-commit hooks):
```bash
npm run prepare
```

### Development Mode

To run the app in development mode with hot reload:

```bash
npm start
```

This will start a development server at `http://localhost:9000` and automatically open it in your browser.

### Production Build

To create an optimized production build:

```bash
npm run build
```

This will generate optimized files in the `dist/` directory:
- `index.html` - Minified HTML file
- `bundle.[hash].js` - Minified and optimized JavaScript bundle with embedded CSS

To view the production build, open `dist/index.html` in your browser.

### Code Quality

Run ESLint to check for code issues:

```bash
npm run lint
```

Auto-fix ESLint issues:

```bash
npm run lint:fix
```

Format code with Prettier:

```bash
npm run format
```

## Project Structure

```
calculator/
├── .husky/                    # Git hooks configuration
│   └── pre-commit            # Pre-commit hook for linting
├── dist/                      # Production build output (generated)
├── src/                       # Source files
│   ├── js/                   # JavaScript modules
│   │   ├── calculator.js     # Main calculator logic and state management
│   │   ├── operations.js     # Mathematical operations implementation
│   │   └── theme-manager.js  # Theme switching functionality
│   ├── styles/               # CSS styles
│   │   └── main.css          # Main styles with theme variables
│   ├── index.html            # HTML template
│   └── index.js              # Application entry point
├── .eslintrc.js              # ESLint configuration
├── .prettierrc.js            # Prettier configuration
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies and scripts
├── webpack.config.js         # Webpack configuration
└── README.md                 # This file
```
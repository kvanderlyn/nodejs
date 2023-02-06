# D&D UI [working title]

## Packages Used
1. Tailwind
```bash
npm install -D tailwindcss concurrently
```
2. Headless Ui
```bash
npm install @headlessui/react
```


## Testing
```bash
npm install --save-dev jest jest-environment-jsdom
npm install --save-dev @swc/core @swc/jest
npm install --save-dev @testing-library/react
```
Create a .swcrc file in root directory 

```json
{
    "jsc": {
      "target": "es2017",
      "parser": {
        "syntax": "typescript",
        "tsx": true,
        "decorators": false,
        "dynamicImport": false
      },
      "transform": {
        "react": {
          "pragma": "React.createElement",
          "pragmaFrag": "React.Fragment",
          "throwIfNamespace": true,
          "development": false,
          "useBuiltins": false,
          "runtime": "automatic"
        },
        "hidden": {
          "jest": true
        }
      }
    },
    "module": {
      "type": "commonjs",
      "strict": false,
      "strictMode": true,
      "lazy": false,
      "noInterop": false
    }
  }
```

Create a jest.config.js file in the root directory
```js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/app/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/public/**',
    '!<rootDir>/build/**',
    '!<rootDir>/coverage/**',
    '!<rootDir>/*.config.js',
  ],
  moduleNameMapper: {
    // Handle absolute imports in Remix
    '~/(.*)': '<rootDir>/app/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.cache/',
    '<rootDir>/build/',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(tsx)$': '@swc/jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
```

Add a script in the package.json file 
```json
"scripts": {
    "build": "npm run build:css && remix build",
    "build:css": "tailwindcss -m -i ./styles/app.css -o app/styles/app.css",
    "dev": "concurrently \"npm run dev:css\" \"remix dev\"",
    "dev:css": "tailwindcss -w -i ./styles/app.css -o app/styles/app.css",
    "start": "remix-serve build",
    "typecheck": "tsc",
    "test": "jest --coverage"
  },
```

## Documentation
- [Remix Docs](https://remix.run/docs)
- [Tailwind Docs](https://tailwindcss.com/docs/guides/remix)
- [Headless Ui Docs](https://headlessui.com/)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)

## Development

From your terminal:

```
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.
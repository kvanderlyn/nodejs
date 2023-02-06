module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/app/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/app/entry.client.tsx',
    '!<rootDir>/app/entry.server.tsx',
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

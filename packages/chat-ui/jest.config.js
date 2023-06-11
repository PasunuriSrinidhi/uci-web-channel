module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/', '/dist/', 'examples'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverage: true, // Enable code coverage collection
  coverageDirectory: 'coverage', // Specify the directory for coverage reports
  moduleDirectories: ['node_modules'], // Customize module resolution directories if needed
  transform: {
    // Add additional transformations if required
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};

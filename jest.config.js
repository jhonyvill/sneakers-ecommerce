module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/.jest/mocks/svgrMocks.js",
    "\\.(png|jpg)": "<rootDir>/.jest/mocks/fileMock.js",   
   "^.+\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.jsx',
    '!src/App.jsx',
    '!src/main.jsx',
    '!src/**/*styles.jsx',
    '!src/Themes.jsx',
    '!src/GlobalStyles.jsx',
  ],
}
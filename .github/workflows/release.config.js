//const { buildQueries } = require("@testing-library/react");

module.exports = {
  branches: "master",
  repositoryURL: "https://github.com/michnae/react-app/",
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github', {
        'assets': [
            { "path": "/home/runner/work/react-app/react-app/build.zip", "label": "Build" },
            { "path": "/home/runner/work/react-app/react-app/coverage.zip", "label": "Coverage" }
        ]
      }
    ],
  ]
}
const { buildQueries } = require("@testing-library/react");

module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/michnae/react-app/",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github", {
        assets: [
            { path: "react-app/build.zip", label: "Build" },
            { path: "react-app/coverage.zip", label: "Coverage" }
        ]
      }
    ]
  ]
};

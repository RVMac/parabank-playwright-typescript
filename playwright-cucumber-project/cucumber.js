module.exports = {
    default: {
      require: [
        "src/hooks/hooks.ts",
        "src/step-definitions/UI/*.ts",
        "src/step-definitions/API/*.ts"
      ],
      requireModule: ["ts-node/register"],
      format: ["progress-bar", "json:playwright-cucumber-project/reports/cucumber-report.json"],
      paths: ["src/features/ParaBank.feature"],
      worldParameters: {},
      formatOptions: {
        "snippetInterface": "async-await",
      }
    }
  };
  
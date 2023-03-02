module.exports = {
  presets: [
      [
          "@babel/preset-env",
          {
              targets: {
                  node: "current",
              },
          },
      ],
      "@babel/preset-typescript",
  ],
  plugins: [
      [
          "module-resolver",
          {
              alias: {
                  "@application": "./src/application",
                  "@domain": "./src/domain",
                  "@shared": "./src/shared",
              },
          },
      ],
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
  ignore: ["**/*.spec.ts", "coverage/", "**/fakes/"],
};

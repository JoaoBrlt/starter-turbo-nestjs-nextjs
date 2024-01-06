/** @type {import("syncpack").RcFile} */
module.exports = {
  versionGroups: [
    {
      label: "Use wildcard when using local packages",
      dependencies: ["@starter/**"],
      dependencyTypes: ["dev", "prod"],
      pinVersion: "*",
    },
  ],
};

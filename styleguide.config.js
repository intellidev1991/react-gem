const path = require("path");
const { version } = require("./package.json");

module.exports = {
  //components: "src/components/**/^(?!index).*.[ts|tsx|js|jsx]", // skip index.ts
  //components: "src/components/**/!(index).*", // skip index.ts
  title: "React-gem Document",
  pagePerSection: true,
  tocMode: "expand",
  usageMode: "expand",
  exampleMode: "expand",
  version: `${version}`,
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto",
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Roboto", sans-serif',
    },
  },
  ribbon: {
    // Link to open on the ribbon click (required)
    url: "https://github.com/intellidev1991/react-gem",
    // Text to show on the ribbon (optional)
    text: "Source on GitHub",
  },
  sections: [
    {
      name: "Installation",
      content: "src/docs/install.md",
    },
    {
      name: "Hooks",
      components: "src/components/hooks/!(index).ts",
      description: "Some useful Hooks ",
    },
    {
      name: "Components",
      components: "src/components/components/!(index).tsx",
    },
  ],
  moduleAliases: {
    "react-gem": path.resolve(__dirname, "src"),
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath);
    const fn = name.substring(0, name.lastIndexOf("."));
    return `import { ${fn} } from 'react-gem';`;
  },
  resolver: require("react-docgen").resolver.findAllComponentDefinitions,
  propsParser: require("react-docgen-typescript").withDefaultConfig({ propFilter: { skipPropsWithoutDoc: true } })
    .parse,
  //propsParser: require("react-docgen-typescript").withCustomConfig("./tsconfig.json").parse, // used to support TSX
};

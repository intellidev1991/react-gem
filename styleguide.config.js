module.exports = {
  //components: "src/components/**/^(?!index).*.[ts|tsx|js|jsx]", // skip index.ts
  //components: "src/components/**/!(index).*", // skip index.ts
  title: "React-gem Document",
  pagePerSection: true,
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
    url: "https://github.com/intellidev1991/react-gem",
  },
  sections: [
    {
      name: "Installation",
      content: "src/docs/install.md",
      exampleMode: "expand",
      usageMode: "expand",
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
};

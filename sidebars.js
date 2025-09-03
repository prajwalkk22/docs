/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Technologies",
      items: [
        "technologies/java",
        "technologies/spring-boot",
        "technologies/git",
        "technologies/JDBC"
      ],
    },
    {
      type: "category",
      label: "Projects",
      items: ["projects/REST_API"],
    },
  ],
};

module.exports = sidebars;

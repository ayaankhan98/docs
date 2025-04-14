// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Quick Tour",
    href: "/quick-tour",
  },
  {
    title: "Installation",
    href: "/installation",
    items: [
      { title: "Mac", href: "/installation/mac" },
      { title: "Windows", href: "/installation/window" },
      { title: "Linux", href: "/installation/linux" },
    ],
  },
  {
    title: "Workspaces",
    href: "/workspaces",
  },
  {
    title: "Suites",
    href: "/suites",
  },
  {
    title: "Test Case",
    href: "/test-case",
  },
  {
    title: "Web Testing",
    href: "/web-testing",
    items: [
      {
        title: "Record Test case",
        href: "/web-testing/record test-case",
        items: [
          {
            title: "Record & playback",
            href: "/web-testing/record test-case/record-playback",
          },
          {
            title: "AI recording",
            href: "/web-testing/record test-case/ai-recording",
          },
        ],
      },

      {
        title: "Assertions",
        href: "/web-testing/assertions",
        items: [
          { title: "AI Generated", href: "/ai-generated" },
          { title: "Manual", href: "/manual" },
        ],
      },
      {
        title: "Recording variables",
        href: "/web-testing/recording-variables",
      },
      {
        title: "Executions",
        href: "/web-testing/executions",
        items: [
          { title: "Cloud", href: "/cloud" },
          { title: "Local", href: "/local" },
        ],
      },
    ],
  },

  {
    title: "API Testing",
    href: "/api-testing",
    items: [
      { title: "1", href: "/1" },
      { title: "2", href: "/2" },
      { title: "3", href: "/3" },
    ],
  },
  {
    title: "Executions",
    href: "/executions",
    items: [
      { title: "Cloud", href: "/cloud" },
      { title: "Local", href: "/local" },
    ],
  },
  {
    title: "Variables",
    href: "/variables",
  },
  {
    title: "Teams",
    href: "/teams",
  },
  {
    title: "Integrations",
    href: "/integrations",
    items: [
      { title: "Email", href: "/email" },
      { title: "Jira", href: "/jira" },
      { title: "Github", href: "/github" },
    ],
  },
  {
    title: "Reports",
    href: "/reports",
  },
  {
    title: "Schedules",
    href: "/schedules",
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();

export default {
  classic: import("@oierspace/theme-vite").then(({ default: createApp }) =>
    createApp()
  ),
  plain: import("@oierspace/theme-remix").then(({ default: app }) => app),
};

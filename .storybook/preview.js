export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  chromatic: { disableSnapshot: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
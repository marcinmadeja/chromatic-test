export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  chromatic: { disableSnapshot: false },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
/** @type { import('@storybook/react').Preview } */

import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview

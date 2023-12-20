import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import async from './async';

import '@async-design/react/dist/output.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
        default: 'dark',
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
        theme: async
    }
    },
  }

export default preview;
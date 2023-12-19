import { create } from '@storybook/theming/create';
import logoAsync from './logoAsync.png';

export default create({
  base: 'dark',
  brandTitle: 'Async',
  brandUrl: 'https://async-ui.com',
  brandImage: logoAsync,
  brandTarget: '_self',
});
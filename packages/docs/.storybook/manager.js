import { addons } from '@storybook/manager-api';
import async from './async';

addons.setConfig({
  theme: async,
});
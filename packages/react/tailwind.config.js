import { nextui } from '@nextui-org/react'
import { colors } from '@asyncui/tokens'

/** @type {import('tailwindcss').Config} */
export const content = [
  '../../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  '../../../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  './src/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/components/*.{js,ts,jsx,tsx}',
]
export const theme = {
  extend: {
    colors: {
        colors
    },
    fontFamily: {
      'system-font': ['Poppins', 'sans-serif'],
    },
  },
}
export const darkMode = 'class'
export const plugins = [nextui()]

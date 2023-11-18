import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        small: { raw: '(max-width: 540px)' },
        medium: { raw: '(min-width: 520px)' },
        smd: { raw: '(min-width: 640px)' },
        large: { raw: '(min-width: 1025px)' },
        extralarge: { raw: '(min-width: 1281px)' },
      },
    },
  },
  plugins: [],
}
export default config

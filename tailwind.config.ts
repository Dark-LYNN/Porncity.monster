// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#B70640',
        primary_0: '#7F023F',
        primary_1: '#FF66BA',
        primary_2: '#DCA2D7',
        primary_3: '#F9F2F8',

        secondary: '#605E60',
        secondary_0: '#1A1A1A',
        secondary_1: '#8E87EA',
        secondary_2: '#BAAEB3',
        secondary_3: '#E5DADF',

        white: '#FFFFFF',
        black: '#000000',
        background: '#333333',

        link: '#ED0770',
      },
    },
  },
  plugins: [],
};

export default config;

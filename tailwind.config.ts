import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: { ...colors.sky, DEFAULT: colors.sky[500] },
        secondary: { ...colors.fuchsia, DEFAULT: colors.fuchsia[500] },
        neutral: { ...colors.neutral, DEFAULT: colors.neutral[900] },
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      type Properties =
        | '&:hover'
        | '&:active'
        | 'backgroundColor'
        | 'borderColor';

      const retroButtonUtilities: Record<
        string,
        {
          [pseudoClass in Properties]:
            | string
            | {
                backgroundColor: string;
                borderColor: string;
              };
        }
      > = {};

      const colors = theme('colors');

      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const bgColor = colors[color][500] as string;
          const borderColor = colors[color][700] as string;
          const hoverBgColor = colors[color][400] as string;
          const hoverBorderColor = colors[color][600] as string;
          const activeBgColor = colors[color][600] as string;
          const activeBorderColor = colors[color][800] as string;

          retroButtonUtilities[`.retro-button-${color}`] = {
            backgroundColor: bgColor,
            borderColor,
            '&:hover': {
              backgroundColor: hoverBgColor,
              borderColor: hoverBorderColor,
            },
            '&:active': {
              backgroundColor: activeBgColor,
              borderColor: activeBorderColor,
            },
          };

          retroButtonUtilities[`.retro-button-${color}.demoted`] = {
            ...retroButtonUtilities[`.retro-button-${color}`],
            backgroundColor: 'transparent',
          };

          addUtilities(retroButtonUtilities);
        }
      }
    }),
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {} as Record<string, { boxShadow: string }>;
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 60px 20px ${color1}, 0 0 20px 10px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
};
export default config;

import { colors } from './theme';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: 'media',
  content: ['**/*.html', 'src/components/**/*.js'],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
    },
    extend: {
      colors: {
        surfacePrimary: 'var(--surface-primary)',
        surfaceSecondary: 'var(--surface-secondary)',
        surfaceBrand: 'var(--surface-brand)',
        surfaceAccent: 'var(--surface-accent)',
        surfaceInvert: 'var(--surface-invert)',
        surfacePrimaryMix:
          'color-mix(in srgb, var(--surface-brand) 100%, var(--surface-secondary) 50%)',
        surfaceSecondaryMix:
          'color-mix(in srgb, var(--surface-secondary) 90%, var(--color-white) 10%)',
        surfaceBrandMix:
          'color-mix(in srgb, var(--surface-brand) 20%, var(--color-white) 100%)',

        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        brand: 'var(--text-brand)',
        accent: 'var(--text-accent)',
        invert: 'var(--surface-invert)',

        borderPrimary: 'var(--border-primary)',
        borderSecondary: 'var(--border-secondary)',
        borderBrand: 'var(--border-brand)',
        borderAccent: 'var(--border-accent)',
        borderInvert: 'var(--border-invert)',
        borderBrandMix:
          'color-mix(in srgb, var(--border-brand) 10%, var(--color-white))',

        focusRingMix:
          'color-mix(in srgb, var(--surface-brand) 30%, var(--color-white))',
      },
      boxShadow: {
        dialog: '0px 24px 24px 0px rgba(0, 0, 0, 0.25)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;

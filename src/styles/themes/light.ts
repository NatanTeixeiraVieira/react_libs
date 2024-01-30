export default {
  title: 'light',
  border: {
    default: '1px solid #aaaaaa',
    large: '5px solid #323232',
    radius: {
      default: '0.3125rem', // 5px
      big: '0.625rem', // 10px
    },
  },

  font: {
    sizes: {
      xxxxsmall: '0.5rem', // 8px
      xxxsmall: '0.75rem', // 12px
      xxsmall: '0.875rem', // 14px
      xsmall: '1rem', // 16px
      small: '1.25rem', // 20px
      medium: '1.5rem', // 24px
      large: '2rem', // 32px
      xlarge: '2.5rem', // 40px
      xxlarge: '3rem', // 48px
      xxxlarge: '3.5rem', // 56px
      huge: '4rem', // 64px
    },
    weights: {
      regular: 400,
      bold: 700,
      xbold: 800,
    },
  },
  spacings: {
    xxxsmall: '0.5rem', // 8px
    xxsmall: '0.625rem', // 10px
    xsmall: '1rem', // 16px
    small: '1.5rem', //24px
    medium: '2rem', // 32px
    large: '2.5rem', // 40px
    xlarge: '3rem', // 48px
    xxlarge: '3.5rem', // 56px
    huge: '4rem', // 64px
  },
  transition: {
    default: 'all 0.3s ease',
    fast: 'all 0.1s ease',
  },
  skeleton: {
    animation: '1.5s ease-in-out infinite',
  },
  media: {
    desktop: '@media (max-width: 1021px)',
    tablet: '@media (max-width: 1020px)',
    mobile: '@media (max-width: 760px)',
    mobilexsmall: '@media (max-width: 290px)',
  },

  colors: {
    background: '#FFFFFF',
    primary: '#323232',
    links: '#0969da',
    light: '#EFEFEF',
    mediumGray: '#DDDDDD',
    field: '#FeFeFe',
    darkGray: '#777777',
    placeholder: '#656565',
    error: '#EF4444',
    destructive: '#EF5555',
    skeleton: {
      default: '#e5e5e5',
      animation: '#f5f5f5',
    },
    text: {
      primary: '#333333',
      secondary: '#EFEFEF',
    },
  },
} as const;

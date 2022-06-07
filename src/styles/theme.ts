import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  mainGreen: '#2DE466',
  lightGreen: '#55B976',
  mainViolet: '#693BFB',

  flexMixIn: (justify: string, align: string) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
};
export default theme;

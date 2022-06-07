import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainGreen: string;
    lightGreen: string;
    mainViolet: string;

    flexMixIn: object;
  }
}

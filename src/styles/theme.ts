const theme = {
  background: '#fff',

  flexMixIn: (justify: string, align: string) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
};
export default theme;

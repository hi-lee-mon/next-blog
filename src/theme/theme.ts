import 'styled-components';

// 色一覧
const COLORS = {
  PRIMARY: '#5dc7eb',
};

// ______________________________________________________
//
// ThemeProviderに渡すtheme
export const theme = {
  colors: {
    border: COLORS.PRIMARY,
    text: COLORS.PRIMARY,
    body: '#051923',
  },
} as const;
// ______________________________________________________
//
type AppTheme = typeof theme;
// ______________________________________________________
//
// themeの型を拡張(保管が効くようになる)
declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}

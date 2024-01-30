import themeBase from '../styles/themes/base';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type Theme = typeof themeBase;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: typeof light.title | typeof dark.title;
    colors: typeof light.colors | typeof dark.colors;
  }
}

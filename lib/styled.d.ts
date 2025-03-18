/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import { ThemeType } from './theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

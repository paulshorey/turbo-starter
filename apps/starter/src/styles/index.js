import { Global, css, useTheme } from '@emotion/react';
import html from 'src/styles/global/html';
import classes from 'src/styles/global/classes';
import fonts from 'src/styles/global/fonts';
import layout from 'src/styles/global/layout';

const styles = () => {
  let theme = useTheme();
  return (
    <Global
      styles={css`
        ${html(theme)}
        ${classes(theme)}
        ${fonts(theme)}
        ${layout(theme)}
      `}
    />
  );
};
export default styles;

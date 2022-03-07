import { Global, css, useTheme } from "@emotion/react";
import html from "./html";
import classes from "./classes";
import fonts from "./fonts";
import layout from "./layout";

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

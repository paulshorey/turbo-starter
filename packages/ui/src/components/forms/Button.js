import { css } from "@emotion/react";
import theme from "styles/theme";

const style = () => css`
  cursor: pointer;
  color: ${theme.colors.accent};
  border: solid 2px ${theme.colors.accent};
  &:focus {
    outline: none;
    color: ${theme.colors.accentDark};
    border: solid 2px ${theme.colors.accentDark};
  }
`;

const Button = () => {
  return (
    <button
      css={style}
      className="bg-blue-300 px-2 py-1.5 rounded focus:ring-2 focus:ring-offset-2"
    >
      Boop
    </button>
  );
};
export default Button;

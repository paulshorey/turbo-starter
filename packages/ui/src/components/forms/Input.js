import { css } from "@emotion/react";
import theme from "styles/theme";

const style = () => css`
  color: ${theme.colors.accent};
  border: solid 2px ${theme.colors.accent};
  &:focus {
    outline: none;
    color: ${theme.colors.accentDark};
    border: solid 2px ${theme.colors.accentDark};
  }
`;

const Input = () => {
  return (
    <input
      css={style}
      className="bg-blue-300 px-2 py-1.5 rounded focus:ring-2 focus:ring-offset-2"
      placeholder="boop"
    />
  );
};
export default Input;

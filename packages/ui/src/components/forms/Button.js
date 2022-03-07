import { css } from "@emotion/react";

const style = (theme) => css`
  color: green;
  border: solid 2px green;
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

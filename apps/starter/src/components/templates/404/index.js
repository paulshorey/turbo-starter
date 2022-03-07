import React, { useEffect, useState } from 'react';
import { css, useTheme } from '@emotion/react';

const style = (theme) => css`
  color: red;
`;

const Template = () => {
  const theme = useTheme();
  return (
    <div css={style(theme)}>
      <h1>404</h1>
    </div>
  );
};
export default Template;

import React, { useEffect, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import Input from 'ui/components/forms/Input';
import Button from 'ui/components/forms/Button';

const style = (theme) => css`
  color: green;
  h1 {
    color: green;
  }
`;

const Template = () => {
  const theme = useTheme();
  return (
    <div css={style(theme)}>
      <h1>Homepage</h1>
      <Input />
      <Button />
    </div>
  );
};
export default Template;

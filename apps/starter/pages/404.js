import React from 'react';
import Template from '@templates/404';
import PageContext from 'src/context/Page';

const Page = ({}) => {
  let pageContext = {};

  return (
    <PageContext.Provider value={pageContext}>
      <Template />
    </PageContext.Provider>
  );
};
export default Page;

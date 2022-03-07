import React from 'react';
import Template from '@templates/Home';
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

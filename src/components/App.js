import React, { cloneElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';

const FormInfo = loadable(() => import('././contents/FormInfo'));

const CONTAINER = styled.div`
  margin: 0 auto;
  width: 740px;
`;

const IFRAME = styled.iframe`
  display: none;
`;

export default () => {
  const [content, setContent] = useState(() => <FormInfo />);
  useEffect(() => {
    window.scroll(0, 0);
  }, [content]);

  return (
    <CONTAINER>
      {cloneElement(content, { setContent })}
      <IFRAME src="about:blank" name="iframe"></IFRAME>
    </CONTAINER>
  );
};

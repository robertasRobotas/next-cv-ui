import React from 'react';
import styled from 'styled-components';

const Area = styled('textarea')`
  width: 300px;
  height: 200px;
  padding: 0;
  box-sizing: border-box;
`;

const CodeArea = () => {
  return (
    <>
      <Area />
    </>
  );
};

export default CodeArea;

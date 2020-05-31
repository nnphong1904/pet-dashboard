import React from 'react';
import styled from 'styled-components';

const StyledContentWrapper = styled.div`
  flex: 0 0 80%;
`;

const ContentWrapper = ({children})=>{

  const content = (
    <StyledContentWrapper>
      {children}
    </StyledContentWrapper>
  );
  return content;
}
export default ContentWrapper;
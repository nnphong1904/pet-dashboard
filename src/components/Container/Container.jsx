import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
`; 


const Container = ({children})=>{
  const content = (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
  return content;
}

export default Container;
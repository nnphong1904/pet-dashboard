import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  border-bottom: 1px solid #ededed;
  height: 10%;
  width: 100%;
  
`;
const StyledH1 = styled.h1`
  padding-left: 10px;
`;
const Header = ({ title }) => {

  const content = (
    <StyledHeader>
      <StyledH1>{ title }</StyledH1>
    </StyledHeader>
  );
  return content;
}
export default Header;
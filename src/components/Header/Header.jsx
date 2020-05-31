import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  border-bottom: 1px solid #ededed;
  height: 10%;
`;

const Header = ()=>{

  const content = (
    <StyledHeader>
      THIS IS HEADER 
    </StyledHeader>
  );
  return content;
}
export default Header;
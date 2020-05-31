import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  height: 100%;
  border-right: 1px solid #ededed;
  flex: 0 0 20%;
`;

const Sidebar = ()=>{

  const content = (
    <StyledSidebar>
      Sidebar
    </StyledSidebar>
  );
  return content;
}
export default Sidebar;
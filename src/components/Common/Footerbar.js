import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 150px;
  background-color: #49446B;
  padding: 20px;
`;

const FooterText = styled.p`
  color: white;
  font-family: Pretendard;
`

const Footerbar = () => {
  return (
    <FooterContainer>
      <FooterText>푸터 내용</FooterText>
    </FooterContainer>
  )
}

export default Footerbar;

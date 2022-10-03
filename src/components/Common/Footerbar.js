import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 150px;
  background-color: #49446B;
  padding: 15px;
`;

const ContentContainer = styled.div`
  display: flex;  
  max-width: 1200px;
  margin: auto;
`

const LogoImage = styled.img`
  margin-right: 30px;
  width: 120px;
  height: 120px;
`

const FooterText = styled.p`
  color: white;
  font-family: Pretendard;
  margin: 6px;
`

const Footerbar = () => {
  return (
    <FooterContainer>
      <ContentContainer>
      <LogoImage src={require("../../image/logo_white_500.png")} />
      <div>
        <FooterText>국회민원상담실 운영<br/>
          - 상담시간: 평일 9시~18시(점심시간 12시~13시 제외)<br/>
          -  위치: 서울특별시 영등포구 의사당대로 1 국회의원회관 1층 후면 안내실 내(9호선 국회의사당역 6번 출구)</FooterText>
        <FooterText>※ 문의전화: (청원)02-6788-0081, (진정)02-6788-2453,2154</FooterText>
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </ContentContainer>
    </FooterContainer>
  )
}

export default Footerbar;

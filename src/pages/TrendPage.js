import React from 'react';
import styled from "styled-components";
import MemberNetwork from '../components/MemberNetwork';
import MemberNetworkD3 from '../components/MemberNetworkD3';


const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const Title = styled.div`
    margin: 20px;
    color: #49446B;
    font-size: 30px;    
    font-family: Pretendard;
    font-weight: bold;
`

// 트렌드 분석
const TrendFrame = styled.div`
    background: #EDF4FA;
    width: 1000px;
    height: 600px;
`

// 의원 네트워크
const NetworkFrame = styled.div`
    background: #EDF4FA;
    width: 1000px;
    min-height: 600px;
`

const TrendPage = () => {
  return (
    <PageContainer>
      <Title>토픽 트렌드</Title>
      <TrendFrame>
        {true && <MemberNetworkD3 />}
      </TrendFrame>
      <Title>의원 네트워크</Title>
      <NetworkFrame>
        <iframe title="의원 네트워크" width="1000" height="600" frameBorder="0" scrolling="no" src="http://localhost:8000/network/">의원 네트워크</iframe>
        <MemberNetwork width={1000} height={1000} fill="#ffffff" />
      </NetworkFrame>
      <MemberNetworkD3 />
      <div style={{ height: "100px" }} />
    </PageContainer>
  )
}

export default TrendPage;

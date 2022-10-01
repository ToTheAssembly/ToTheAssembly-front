import React from 'react';
import styled from "styled-components";


const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;


// 트렌드 분석
const TrendFrame = styled.div`
    background: gray;
    width: 1000px;
    height: 600px;
`

// 의원 네트워크
const NetworkFrame = styled.div`
    background: gray;
    width: 1000px;
    height: 600px;
`

const TrendPage = () => {
  return (
    <PageContainer>
      <TrendFrame>
        
      </TrendFrame>
      <NetworkFrame>
      <iframe title="의원 네트워크" width="1000" height="600" frameBorder="0" scrolling="no" src="http://localhost:8000/network/">의원 네트워크</iframe>
      </NetworkFrame>
    </PageContainer>
  )
}

export default TrendPage;

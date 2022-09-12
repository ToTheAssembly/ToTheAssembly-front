import React from 'react';
import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BillCard from '../components/Common/BillCard';

const PageContainer = styled.div`
  margin: 0 auto;
`;

const MemberImage = styled.div`
  width: 270px;
  height: 360px;
  background: #D9D9D9;
  position: relative;
  margin: auto;
`

const TEXTSTYLE = {
  // background-color, color
  "국민의힘": ['#F01C2A', 'white'],
  "더불어민주당": ['#004EA1', 'white'],
  "정의당": ['#FFED00', 'black'],
  "기본소득당": ['#00D2C3', '#19233C']
}

const MemberParty = styled.p`
  width: 130px;
  text-align: center;
  font-family: pretendard;
  font-size: 18px;
  background-color: ${props => TEXTSTYLE[props.type][0]};
  color: ${props => TEXTSTYLE[props.type][1]};
  margin: auto;
`

const MemberInfoRow = styled.div`
  margin: 12px; 
  clear: both;
`

const MemberInfoAttr = styled.div`
  display: inline-block;
  width: 100px;
  height: 32px;
  border-radius: 3px;
  text-align: center;
  padding: 5px;
  font-family: pretendard;
  font-size: 16px;
  background-color: #A39DBC;
  color: white;
`

const MemberInfoContent = styled.div`
  display: inline-block;
  font-family: pretendard;
  font-size: 16px;
  color: black;
  margin: 0 16px;
`

const Title = styled.div`
  font-family: Pretendard;
  color: #49446B;
  font-size: 24px;
  margin: 30px auto 20px;
  max-width: 900px
`

const MemberDetailPage = () => {
  return (
    <PageContainer class="container">
      {/* 의원 정보 */}
      <Title>■ 의원 정보</Title>
      <Row style={{margin: '20px auto', padding: '50px 0', maxWidth: '900px', border: '1px solid #A7A7A7'}}>
        <Col xs={12} sm={6} style={{margin: 'auto'}}>
          <MemberImage />
          <div style={{color: '#49446B', textAlign: 'center', padding: '10px 0 6px 0'}}>정당</div>
          <MemberParty type={"더불어민주당"}>더불어민주당</MemberParty>
        </Col>
        <Col xs={12} sm={6} style={{}}>
          <MemberInfoRow>
            <MemberInfoAttr>이름</MemberInfoAttr>
            <MemberInfoContent>송옥주</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>성별</MemberInfoAttr>
            <MemberInfoContent>여</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>생년월일</MemberInfoAttr>
            <MemberInfoContent>(양) 1965-12-20</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>직책명</MemberInfoAttr>
            <MemberInfoContent>정보</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>선거구</MemberInfoAttr>
            <MemberInfoContent>정보</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>전화번호</MemberInfoAttr>
            <MemberInfoContent>정보</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>이메일</MemberInfoAttr>
            <MemberInfoContent>정보</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>홈페이지</MemberInfoAttr>
            <MemberInfoContent>정보</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>대표 위원회</MemberInfoAttr>
            <MemberInfoContent>정보</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>소속 위원회</MemberInfoAttr>
            <MemberInfoContent>정보</MemberInfoContent>
          </MemberInfoRow>
        </Col>
      
        
      </Row>
      
      <div style={{height: '20px'}} />

      {/* 발의한 법안 목록 */}
      <Title>■ 발의한 법안 목록</Title>
      <Row style={{margin: 'auto',  maxWidth: '900px'}}>
        <BillCard billContent={1} />
        <BillCard billContent={2} />
        <BillCard billContent={3} />
      </Row>

      <div style={{height: '100px'}} />
    </PageContainer>
  )
}

export default MemberDetailPage;

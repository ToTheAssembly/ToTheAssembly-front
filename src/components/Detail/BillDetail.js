import React from 'react';
import styled from "styled-components";
import { Container, Row, Col  } from 'react-bootstrap';
import Category from '../Common/Category';
import Tag from '../Common/Tag';


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0 10px 0;
`;

const ContentContainer = styled.div`
  margin: 5px 0 5px 0 ;
`;

const BillTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin: 10px 0 10px 5px;
`;

const BillTable = styled.div`
  margin: 10px 12px 20px 12px;

`;

const BillContent = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: center;
  flex-direction: column;
  border: solid 1px #C4C4D7;
  padding: 20px;
`;


const BillDetail = () => {
  return (
    <div>
      <HeaderContainer>
        <Category category={"카테고리"}/>
        <Tag hashtag={"태그1"} />
        <Tag hashtag={"태그1"} />
        <Tag hashtag={"태그1"} />
      </HeaderContainer>
      <ContentContainer>
        <BillTitle>의안 제목</BillTitle>
        <BillTable>
            <Row style={{background: '#CCD4E4', display:'flex', justifyContent: 'space-around', alignItems: 'center', fontSize: '13px', color: '#49446B', textAlign: 'center'}}>
              <Col sm="2" md="2" lg="2">의안 번호</Col>
              <Col sm="2" md="2" lg="2">제안 일자</Col>
              <Col sm="4" md="4" lg="4">발의자</Col>
              <Col sm="2" md="2" lg="2">처리 상태</Col>
              <Col sm="2" md="2" lg="2">표결 결과</Col>
            </Row>
            <Row style={{border: 'solid 1px #C4C4D7', textAlign: 'center', fontSize: '11px'}}>
              <Col sm="2" md="2" lg="2">2110436</Col>
              <Col sm="2" md="2" lg="2">2021-05-28</Col>
              <Col sm="4" md="4" lg="4">송옥주, 김승남, 맹성규, 박성준, 안호영, 양정숙, 윤미향, 이수진, 장철민, 최종윤</Col>
              <Col sm="2" md="2" lg="2">상태</Col>
              <Col sm="2" md="2" lg="2">결과</Col>
            </Row>
        </BillTable>
        <BillContent>
          <div style={{fontSize: '15px', fontWeight:700, marginBottom: '15px'}}>내용</div>
          <div style={{padding: '5px'}}>의안 내용 미리보기... 최근 백두대간 및 비무장지대 등에 대한 개발의 목소리가 높아지고 있는 가운데, ...(중략)... 하지만 현행 「자연환경보전법」에 따른 자연환경보전기본방침 수립 시 고려대상에 생태축 보전·복원 내용이 포함되어 있지 않아 ...(중략)... 이에 자연환경보전기본방침 수립 시 고려대상에 생태축 보전복원 내용을 포함하고, 생태축 보전복원이 국가 또는 지방자치단체의 책무로 이어질 수 있도록 생태축 정의를...  의안 내용 미리보기... 최근 백두대간 및 비무장지대 등에 대한 개발의 목소리가 높아지고 있는 가운데, ...(중략)... 하지만 현행 「자연환경보전법」에 따른 자연환경보전기본방침 수립 시 고려대상에 생태축 보전·복원 내용이 포함되어 있지 않아 ...(중략)... 이에 자연환경보전기본방침 수립 시 고려대상에 생태축 보전복원 내용을 포함하고, 생태축 보전복원이 국가 또는 지방자치단체의 책무로 이어질 수 있도록 생태축 정의를 보다 구체화하여 그 실효성을 제고하고자 함(안 제2조제8호 및 제6조제2항제8호).</div>
        </BillContent>
      </ContentContainer>
    </div>
  )
}

export default BillDetail;

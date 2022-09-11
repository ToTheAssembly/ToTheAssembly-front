import React from 'react';
import styled from "styled-components";
import { Row, Col  } from 'react-bootstrap';

const TableContainer = styled.div`
  margin: 10px 12px 20px 12px;
`;

const BillTable = () => {
  return (
    <TableContainer>
      <Row style={{background: '#CCD4E4', display:'flex', justifyContent: 'space-around', alignItems: 'center', fontSize: '13px', color: '#49446B', textAlign: 'center', padding: '3px 0'}}>
        <Col sm="2" md="2" lg="2">의안 번호</Col>
        <Col sm="2" md="2" lg="2">제안 일자</Col>
        <Col sm="4" md="4" lg="4">발의자</Col>
        <Col sm="2" md="2" lg="2">처리 상태</Col>
        <Col sm="2" md="2" lg="2">표결 결과</Col>
      </Row>
      <Row style={{border: 'solid 1px #C4C4D7', textAlign: 'center', fontSize: '11px', padding: '3px 0'}}>
        <Col sm="2" md="2" lg="2">2110436</Col>
        <Col sm="2" md="2" lg="2">2021-05-28</Col>
        <Col sm="4" md="4" lg="4">송옥주, 김승남, 맹성규, 박성준, 안호영, 양정숙, 윤미향, 이수진, 장철민, 최종윤</Col>
        <Col sm="2" md="2" lg="2">상태</Col>
        <Col sm="2" md="2" lg="2">결과</Col>
      </Row>
    </TableContainer>
  );
}


export default BillTable;

import React from 'react';
import styled from "styled-components";
import { Row, Col  } from 'react-bootstrap';
import SimilarMemberCard from './SimilarMemberCard';

const MemberContainer = styled.div`
  background: #7A7398;
  padding: 20px;

`; 

const SimilarMemberList = () => {
  // member: 국회의원의 정보(json), 숫자는 임시로 넣음
  return (
    <div>
      <div style={{fontWeight: 700, color: '#49446B', fontSize: '15px', margin: '30px 0 10px 5px', fontFamily:'Pretendard'}}>유사한 의안을 발의한 국회의원</div>
      <MemberContainer>
          <Row>
            <Col>
              <SimilarMemberCard member={1} />
            </Col>
            <Col>
              <SimilarMemberCard member={2} />
            </Col>
          </Row>
          <Row style={{marginTop: '20px'}}>
            <Col>
              <SimilarMemberCard member={3} />
            </Col>
            <Col />
          </Row>        
      </MemberContainer>
    </div>
  )
}

export default SimilarMemberList;

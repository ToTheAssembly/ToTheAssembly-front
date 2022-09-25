import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import SimilarMemberCard from "./SimilarMemberCard";

const MemberContainer = styled.div`
  display: flex;
  background: #7a7398;
  padding: 20px;
`;

const Title = styled.div`
  margin-left: 5px;
  color: #49446b;
  font-size: 24px;
  font-weight: 700;
  font-family: Pretendard;
`;

const SimilarMemberList = () => {
  // member: 국회의원의 정보(json), 숫자는 임시로 넣음
  return (
    <div>
      <Title>유사한 의안을 발의한 국회의원</Title>
      <MemberContainer>
        <Row>
          <SimilarMemberCard member={1} />
          <SimilarMemberCard member={1} />
        </Row>
        <Row>
          <SimilarMemberCard member={1} />
          <SimilarMemberCard member={1} />
        </Row>
      </MemberContainer>
    </div>
  );
};

export default SimilarMemberList;

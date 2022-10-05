import React from "react";
import styled from "styled-components";
import SimilarMemberCard from "./SimilarMemberCard";
import { Row, Col } from "react-bootstrap";

const MemberContainer = styled.div`
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

const SimilarMemberList = (props) => {
  const content = props.data;
  const sliceContent = content.slice(0, 4);
  //console.log(content);
  return (
    <div>
      <Title>유사한 의안을 발의한 국회의원</Title>
      <MemberContainer>
        <Row>
          {sliceContent?.map((data, index) => {
            return data !== null ? (
              <SimilarMemberCard data={data} key={index} />
            ) : (
              <></>
            );
          })}
        </Row>
      </MemberContainer>
    </div>
  );
};

export default SimilarMemberList;

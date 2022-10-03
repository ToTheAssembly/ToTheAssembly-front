import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MemberCard from "../Common/MemberCard";
import Tag from "../Common/Tag";

const MemberContainer = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 30px 20px 0 -50px;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  font-family: Pretendard;
`;
const Summary = styled.div`
  color: white;
  font-size: 20px;
  font-family: Pretendard;
`;

const SimilarMemberCard = (props) => {
  const data = props.data;
  console.log(data);

  return (
    <Col md={6}>
      <MemberContainer>
        <Row>
          <Col>
            <MemberCard data={data} />
          </Col>
          <Col>
            <ContentBox>
              <Summary>
                자원의 절약과 재활용촉진에 관한 법률 일부개정법률안
              </Summary>
              <TagBox>
                <Tag hashtag={"태그"} />
                <Tag hashtag={"태그"} />
                <Tag hashtag={"태그"} />
              </TagBox>
            </ContentBox>
          </Col>
        </Row>
      </MemberContainer>
    </Col>
  );
};

export default SimilarMemberCard;

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
  display: inline-block;
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
  const bill = data.bill;

  // 태그가 없을 때
  const tag = bill.hashtag || null;
  let tagArray = [];

  // tag가 있을 때
  if (tag !== null) {
    tagArray = tag.split("#");
    tagArray.shift();
  }

  return (
    <Col md={6}>
      <MemberContainer>
        <Row>
          <Col>
            <MemberCard data={data} />
          </Col>
          <Col>
            <ContentBox>
              <Summary>{bill.title}</Summary>
              <TagBox>
                {tagArray.length !== 0 ? (
                  tagArray.map((tag) => {
                    return <Tag key={tag} hashtag={tag} />;
                  })
                ) : (
                  <div></div>
                )}
              </TagBox>
            </ContentBox>
          </Col>
        </Row>
      </MemberContainer>
    </Col>
  );
};

export default SimilarMemberCard;

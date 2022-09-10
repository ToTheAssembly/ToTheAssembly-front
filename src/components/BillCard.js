import React from 'react';
import Category from "../components/Category.js";
import { Card } from 'react-bootstrap';
import styled from "styled-components";
import Tag from './Tag.js';

const HeaderContainer = styled.div`
  display: flex;
  justyfy-content: center;
  align-items: center;
`;

const TagBox = styled.div`
  display: flex;
  justyfy-content: center;
  align-items: center;
  float: left;
  padding: 1px;
  margin-left: 10px;
`;

const ContentContainer = styled.div`
  margin-top: 7px;
`;

const Proposer = styled.div`
  font-size: 12px;
  margin-left: auto;
  color: white;
  background: #49446B;
  padding: 3px 30px;
`;

const BillTitle = styled.div`
  font-size: 18px;
`;

const BillContent = styled.div`
  font-size: 12px;
`;



const BillCard = ({billContent}) => {
  // billContent에서 bill의 data(json)를 받음
  return (
    <div>
      <Card style={{padding: '10px', margin: '10px'}}>
        <HeaderContainer>
          <Category category={"카테고리1"}/>
          <TagBox>
            <Tag hashtag={"해시태그1"} />
            <Tag hashtag={"해시태그2"} />
            <Tag hashtag={"해시태그3"} />
          </TagBox>
          <Proposer>유수연 외 10인</Proposer>
        </HeaderContainer>
        <ContentContainer>
          <BillTitle>의안 제목</BillTitle>
          <BillContent>의안 내용이 들어가는 부분입니다.</BillContent>
        </ContentContainer>
      </Card>
    </div>
  )
}

export default BillCard;

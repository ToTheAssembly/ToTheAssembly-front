import React, { useEffect, useState } from "react";
import Category from "./Category.js";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tag from "./Tag.js";

const HeaderContainer = styled.div`
  display: flex;
  justyfy-content: center;
  align-items: center;
  padding: 5px;
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
  padding: 10px;
`;

const Proposer = styled.div`
  margin-left: auto;
  padding: 3px 30px;
  color: white;
  background: #49446b;
  font-size: 18px;
  font-family: Pretendard;
`;

const BillTitle = styled.div`
  font-size: 28px;
  font-family: Pretendard;
`;

const BillContent = styled.div`
  font-size: 18px;
  font-family: Pretendard;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Button = styled.button`
  border: solid 1px gray;
  background: none;
  text-align: left;
`;

// content: bill(json)
const BillCard = ({ content }) => {
  const navigate = useNavigate();

  const tag = content.hashtag;
  const tagArray = tag.split("#");
  tagArray.shift();

  const movePage = () => {
    console.log("movePage");
    console.log(content);
    navigate(`/bill/detail/${content.id}`, {
      state: {
        billId: content.id,
      },
    });
  };

  return (
    <Button style={{ padding: "10px", margin: "10px" }} onClick={movePage}>
      <HeaderContainer>
        <Category category={"카테고리1"} />
        <TagBox>
          {tagArray.map((tag) => {
            return <Tag key={tag} hashtag={tag} />;
          })}
        </TagBox>
        <Proposer>{content.proposer}</Proposer>
      </HeaderContainer>
      <ContentContainer>
        <BillTitle>{content.title}</BillTitle>
        <BillContent>{content.content}</BillContent>
      </ContentContainer>
    </Button>
  );
};

export default BillCard;

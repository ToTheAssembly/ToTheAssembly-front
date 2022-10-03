import React, { useEffect, useState } from "react";
import Category from "./Category.js";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tag from "./Tag.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
  transition: 0.5s;

  &:hover {
    color: blue;
  }
`;

const Proposer = styled.div`
  width: 200px;
  margin-left: 20px;
  padding: 6px 30px;
  color: white;
  background: #49446b;
  font-size: 18px;
  font-family: Pretendard;
  text-align: center;
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
  background: white;
  text-align: left;
  transition: 0.5s;

  &:hover {
    background: #f3f6f8;
  }
`;

const Likes = styled.div`
  padding: 3px 10px;
  color: black;
  font-size: 20px;
  font-family: Pretendard;
  text-align: center;
`;

const LikesBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 6px 10px;
  color: black;
  font-size: 20px;
`;

// content: bill(json)
const BillCard = (content) => {
  const contents = content.content;
  const navigate = useNavigate();
  console.log(content);

  const tag = contents.hashtag || null;
  let tagArray = [];

  // tag가 있을 때
  if (tag !== null) {
    tagArray = tag.split("#");
    tagArray.shift();
  }

  const movePage = () => {
    console.log(contents);
    navigate(`/bill/detail/${contents.id}`, {
      state: {
        billId: contents.id,
      },
    });
  };

  // 참고자료: https://velog.io/@ahsy92/React-소수점을-포함한-숫자에-1000단위-콤마-찍기
  const addComma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Button
      style={{
        padding: "10px",
        marginTop: "20px",
      }}
      onClick={movePage}
    >
      <HeaderContainer>
        <Category category={contents.category} />
        <Proposer>{contents.proposer}</Proposer>
        <TagBox>
          {tagArray.length !== 0 ? (
            tagArray.map((tag) => {
              return <Tag key={tag} hashtag={tag} />;
            })
          ) : (
            <div></div>
          )}
        </TagBox>
        <LikesBox>
          <FontAwesomeIcon icon={faHeart} />
          <Likes>{addComma(contents.likeCount || 0)}</Likes>
        </LikesBox>
      </HeaderContainer>
      <ContentContainer>
        <BillTitle>{contents.title}</BillTitle>
        <BillContent>{contents.content}</BillContent>
      </ContentContainer>
    </Button>
  );
};

export default BillCard;

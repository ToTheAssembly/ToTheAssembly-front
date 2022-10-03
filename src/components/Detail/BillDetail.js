import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Category from "../Common/Category";
import Tag from "../Common/Tag";
import BillTable from "./BillTable";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentContainer = styled.div`
  font-family: Pretendard;
`;

const BillTitle = styled.div`
  margin: 10px 0 10px 5px;
  font-size: 28px;
  font-weight: 700;
`;

const BillContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: solid 1px #c4c4d7;
  font-size: 18px;
`;

const ContentTitle = styled.div`
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 700;
`;

const Content = styled.div`
  padding: 5px;
`;

// props 처리
const LikesBox = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 30px;
  margin-left: auto;
  color: #7a7398;
  background: white;
  text-align: center;
  border: solid 2px #7a7398;
  border-radius: 5px;

  ${(props) =>
    props.selected &&
    `
    background: #7a7398;
    color: white;
    font-color: white;
  `}
`;

const Likes = styled.div`
  padding: 0px 10px;
  color: #7a7398;
  font-size: 18px;
  font-family: Pretendard;
  text-align: center;

  ${(props) =>
    props.selected &&
    `
    color: white;
  `}
`;

const BillDetail = (billId) => {
  const [bill, setBill] = useState([]);
  const [tags, setTags] = useState([]);
  const [select, setSelect] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const id = billId.billId;

  useEffect(() => {
    //console.log("BillDetailPage");
    const fetchData = async () => {
      try {
        //console.log(billId.billId);
        const response = await axios.get(`/api/bill/${id}`);
        console.log(response.data);
        setBill(response.data.bill);
        setLikeCount(response.data.likeCount);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [billId, select]);

  useEffect(() => {
    if (bill.length != 0) {
      console.log("bill useEffect 실행!");
      console.log(bill);
      const tagArray = bill.hashtag.split("#");
      tagArray.shift();
      setTags(tagArray);
    }
  }, [bill]);

  useEffect(() => {
    if (tags.length != 0) {
      console.log("tags useEffect 실행!");
      console.log(tags);
      // 스피너
    }
  }, [tags]);

  // 1000단위로 comma 추가
  const addComma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 좋아요 추가
  const addLike = () => {
    console.log(select);
    if (!select) {
      setSelect(!select);
      const fetchData = async () => {
        try {
          const response = await axios.post(`/api/bill/${id}/like`);
          console.log("response", response);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    } else setSelect(true);
  };

  return (
    <div>
      <div style={{ height: "70px" }} />
      <HeaderContainer>
        <Category category={bill.category} />
        <div style={{ marginRight: "10px" }} />
        {tags.length != 0 ? (
          tags.map((tag) => {
            return <Tag key={tag} hashtag={tag} />;
          })
        ) : (
          <></>
        )}
        <LikesBox selected={select} onClick={() => addLike()}>
          <FontAwesomeIcon icon={faHeart} />
          <Likes selected={select}>{addComma(likeCount)}</Likes>
        </LikesBox>
      </HeaderContainer>
      <div style={{ height: "10px" }} />
      <ContentContainer>
        <BillTitle>{bill.title}</BillTitle>
        <BillTable bill={bill} />
        <BillContentBox>
          <ContentTitle>내용</ContentTitle>
          <Content>{bill.content}</Content>
        </BillContentBox>
      </ContentContainer>
    </div>
  );
};

export default BillDetail;

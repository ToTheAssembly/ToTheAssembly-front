import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Category from "../Common/Category";
import Tag from "../Common/Tag";
import BillTable from "./BillTable";
import axios from "axios";

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

const BillDetail = (billId) => {
  const [bill, setBill] = useState([]);
  const [tags, setTags] = useState([]);

  const id = billId.billId;

  useEffect(() => {
    console.log("BillDetailPage");
    const fetchData = async () => {
      try {
        //console.log(billId.billId);
        const response = await axios.get(`/api/bill/${id}`);
        setBill(response.data.bill);
        console.log(response.data.bill);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

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

  return (
    <div>
      <div style={{ height: "70px" }} />
      <HeaderContainer>
        <Category category={"카테고리"} />
        {tags.length != 0 ? (
          tags.map((tag) => {
            return <Tag key={tag} hashtag={tag} />;
          })
        ) : (
          <></>
        )}
      </HeaderContainer>
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

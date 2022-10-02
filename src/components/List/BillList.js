import React from "react";
import styled from "styled-components";
import BillCard from "../Common/BillCard";
import { Link } from "react-router-dom";

const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #c4c4d7;
`;

const BillBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background: #c4c4d7;
`;

const BillTitle = styled.div`
  margin: 0 0 10px 0;
  color: #49446b;
  font-size: 25px;
  font-family: Pretendard;
`;

const MorePage = styled(Link)`
  width: auto;
  margin-left: auto;
  color: white;
  border: none;
  background: none;
  font-family: Pretendard;
  font-size: 22px;
  text-decoration: none;
`;

const BillList = ({ content }) => {
  const count = content.length;
  console.log(content);
  const sliceData = content.slice(0, 4) || null;

  const CardList = sliceData?.map((data, index) => {
    return <BillCard content={data} key={index} />;
  });

  return (
    <div>
      <BillTitle>■ 의안({count})</BillTitle>
      <BillContainer>
        <BillBox>{CardList}</BillBox>
        <MorePage>더보기</MorePage>
      </BillContainer>
    </div>
  );
};

export default BillList;

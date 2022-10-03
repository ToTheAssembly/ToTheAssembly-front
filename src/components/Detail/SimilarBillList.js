import styled from "styled-components";
import BillCard from "../Common/BillCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BillContainer = styled.div`
  padding: 20px;
  background: #c4c4d7;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-left: 5px;
  color: #49446b;
  font-size: 24px;
  font-weight: 700;
  font-family: Pretendard;
`;

const SimilarBillList = (props) => {
  const data = props.data;

  return (
    <div>
      <Title>유사한 의안</Title>
      <BillContainer>
        {data.length != 0 ? (
          data.map((bill, index) => {
            return <BillCard key={index} content={bill} />;
          })
        ) : (
          <></>
        )}
      </BillContainer>
    </div>
  );
};

export default SimilarBillList;

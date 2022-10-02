import React from "react";
import styled from "styled-components";
import BillCard from "../Common/BillCard";

const BillContainer = styled.div`
  padding: 5px;
  background: #c4c4d7;
`;

const BillTitle = styled.div`
  margin: 0 0 10px 0;
  color: #49446b;
  font-size: 25px;
  font-family: Pretendard;
`;

const BillList = ({ content }) => {
  const count = content.length;

  return (
    <div>
      <BillTitle>■ 의안(count)</BillTitle>
      <BillContainer>
        <BillCard billContent={1} />
        <BillCard billContent={2} />
        <BillCard billContent={3} />
      </BillContainer>
    </div>
  );
};

export default BillList;

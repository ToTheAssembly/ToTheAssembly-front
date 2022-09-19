import React from 'react';
import styled from "styled-components";
import BillCard from '../Common/BillCard';

const BillContainer = styled.div`
  padding: 5px;
  background: #C4C4D7;
`; 

const Title = styled.div`
  margin-left: 5px;
  color: #49446B;
  font-size: 24px;
  font-weight: 700;
  font-family: Pretendard;
`;

const SimilarBillList = () => {
  return (
    <div>
      <Title>유사한 의안</Title>
      <BillContainer>
        <BillCard />
        <BillCard />
        <BillCard />
      </BillContainer>
    </div>
  )
}

export default SimilarBillList;

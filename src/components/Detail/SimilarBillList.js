import React from 'react';
import styled from "styled-components";
import BillCard from '../Common/BillCard';

const BillContainer = styled.div`
  background: #C4C4D7;
  padding: 5px;
`; 

const SimilarBillList = () => {
  return (
    <div>
      <div style={{fontWeight: 700, color: '#49446B', fontSize: '15px', margin: '30px 0 10px 5px', fontFamily: 'Pretendard'}}>유사한 의안</div>
      <BillContainer>
        <BillCard />
        <BillCard />
        <BillCard />
      </BillContainer>
    </div>
  )
}

export default SimilarBillList;

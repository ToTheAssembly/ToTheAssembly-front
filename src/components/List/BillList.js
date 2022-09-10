import React from 'react';
import styled from "styled-components";
import BillCard from '../Common/BillCard';

const BillContainer = styled.div`
  background: #C4C4D7;
  padding: 5px;
`;

const BillTitle = styled.div`
  margin: 30px 0 10px 0;
  color: #49446B;
  font-size: 15px;
`;

const ViewMoreBox = styled.div`
  display: flex;
  padding: 3px;
  justyfy-content: center;
  align-items: center;
  margin: 0 10px 5px 0;
`;

const ViewMoreText = styled.div`
  margin-left: auto;
  font-size: 12px;
`;

const BillList = ({billList}) => {
  // 검색에 해당하는 billList를 가져온다. (jsonArray)
  return (
    <div>
      <BillTitle>■ 의안(3)</BillTitle>
      <BillContainer>
        <BillCard billContent={1} />
        <BillCard billContent={2} />
        <BillCard billContent={3} />
        <ViewMoreBox>
            <ViewMoreText>의안 더보기▶</ViewMoreText>
        </ViewMoreBox>
      </BillContainer>
    </div>
  )
}

export default BillList;

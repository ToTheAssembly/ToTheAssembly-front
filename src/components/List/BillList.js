import React from 'react';
import styled from "styled-components";
import BillCard from '../Common/BillCard';

const BillContainer = styled.div`
  padding: 5px;
  background: #C4C4D7;
`;

const BillTitle = styled.div`
  margin: 0 0 10px 0;
  color: #49446B;
  font-size: 25px;
  font-family: Pretendard;
`;

const ViewMoreBox = styled.div`
  display: flex;
  justyfy-content: center;
  align-items: center;
  margin: 0 10px 5px 0;
  padding: 3px;
`;

const ViewMoreText = styled.div`
  margin-left: auto;
  color: #49446B;
  font-size: 20px;
  font-family: Pretendard;
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
            <ViewMoreText>의안 더보기 ▶</ViewMoreText>
        </ViewMoreBox>
      </BillContainer>
    </div>
  )
}

export default BillList;

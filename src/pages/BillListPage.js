import React from 'react';
import styled from "styled-components";
import BillCard from '../components/Common/BillCard.js';

const BillPageContainer = styled.div`
  margin: 0 30px;
`;

const CategoryList = styled.div`
  background: #D9D9D9;
  display: flex;
  padding: 1px;
  height: 100px;
`;

const SelectSortContaier = styled.div`
  display: flex;
  padding: 3px;
  justyfy-content: center;
  align-items: center;
  margin: 20px 0;
  font-family: Pretendard;
`;

const SelectSortBox = styled.div`
  margin-left: auto;
`;


const SelectSortBtn = styled.button`
  float: right;
  display: flex;
  padding: 3px 30px;
  background: #CCD4E4;
  color: #49446B;
  font-size: 13px;
  border: none;
`;

const BillCardContainer = styled.div`
  margin: 20px 0;

`;

const BillListPage = () => {
  // billContent에는 bill의 data(json)이 들어감, 숫자는 임시로 넣음
  // 조회순, 최신순 클릭 이벤트 주기
  return (
    <div>
    <CategoryList>카테고리 목록이 들어갑니다.</CategoryList>
    <BillPageContainer>
      <SelectSortContaier>
        <SelectSortBox>
          <SelectSortBtn>조회순</SelectSortBtn>
          <SelectSortBtn>최신순</SelectSortBtn>
        </SelectSortBox>
      </SelectSortContaier>
      <BillCardContainer>
        <BillCard billContent={1} /> 
        <BillCard billContent={2} />
        <BillCard billContent={3} />
      </BillCardContainer>
    </BillPageContainer>
    </div>

  )
}

export default BillListPage;

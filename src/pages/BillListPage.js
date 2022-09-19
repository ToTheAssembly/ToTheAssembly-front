import React from 'react';
import styled from "styled-components";
import BillCard from '../components/Common/BillCard.js';
import Row from 'react-bootstrap/Row';

const BillPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
`;

const CategoryList = styled.div`
  height: 160px;
  display: flex;
  padding: 1px;
  background: #D9D9D9;
`;

const SelectSortContaier = styled.div`
  display: flex;
  justyfy-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 3px;
  font-family: Pretendard;
`;

const SelectSortBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 5px;
`;


const SelectSortBtn = styled.button`
  float: right;
  display: flex;
  padding: 3px 30px;
  color: #49446B;
  background: #CCD4E4;
  font-size: 18px;
  border: none;
`;

const BillCardContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const BillListPage = () => {
  // billContent에는 bill의 data(json)이 들어감, 숫자는 임시로 넣음
  // 조회순, 최신순 클릭 이벤트 주기
  return (
    <div>
    <CategoryList>카테고리 목록이 들어갑니다.</CategoryList>
    <div style={{height: '20px'}} />
    <BillPageContainer >
      <SelectSortContaier>
        <SelectSortBox>
          <SelectSortBtn>조회순</SelectSortBtn>
          <SelectSortBtn>최신순</SelectSortBtn>
        </SelectSortBox>
      </SelectSortContaier>
      <BillCardContainer>
        <Row>
          <BillCard billContent={1} /> 
          <BillCard billContent={2} />
          <BillCard billContent={3} />
        </Row>
      </BillCardContainer>
    </BillPageContainer>
    <div style={{height: '100px'}} />
    </div>

  )
}

export default BillListPage;

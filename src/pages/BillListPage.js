import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BillCard from "../components/Common/BillCard.js";
import Row from "react-bootstrap/Row";
import CPagination from "../components/Common/CPagination.js";
import axios from "axios";

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
  background: #d9d9d9;
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
  color: #49446b;
  background: #ccd4e4;
  font-size: 18px;
  border: none;
`;

const BillCardContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const PagenationContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const BillListPage = () => {
  // billContent에는 bill의 data(json)이 들어감, 숫자는 임시로 넣음
  // 조회순, 최신순 클릭 이벤트 주기

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(1);

  const [bills, setBills] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/bill/list?sort=${sort}&page=${page}`
        );
        setBills(response.data.bills);
        setTotalPage(response.data.bills.length);
        //console.log(response.data.bills);
      } catch (e) {
        console.log(e.response);
      }
    };
    fetchData();
  }, [sort]);

  const sortEvent = (e) => {
    //console.log(e.target.name);
    e.target.name === "최신순" ? setSort(1) : setSort(2);
  };

  return (
    <div>
      <CategoryList>카테고리 목록이 들어갑니다.</CategoryList>
      <div style={{ height: "20px" }} />
      <BillPageContainer>
        <SelectSortContaier>
          <SelectSortBox>
            <SelectSortBtn name={"최신순"} onClick={sortEvent}>
              최신순
            </SelectSortBtn>
            <SelectSortBtn name={"인기순"} onClick={sortEvent}>
              인기순
            </SelectSortBtn>
          </SelectSortBox>
        </SelectSortContaier>
        <BillCardContainer>
          <Row>
            {bills.map((bill) => {
              return <BillCard key={bill.bill_num} content={bill} />;
            })}
          </Row>
        </BillCardContainer>
        <PagenationContainer>{/* <CPagination /> */}</PagenationContainer>
      </BillPageContainer>
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default BillListPage;

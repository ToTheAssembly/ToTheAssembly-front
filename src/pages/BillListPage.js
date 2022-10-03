import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BillCard from "../components/Common/BillCard.js";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Paginate from "../components/Common/Paginate.js";
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
`;

const SelectSortBtn = styled.button`
  float: right;
  display: flex;
  padding: 3px 30px;
  font-size: 20px;
  border: none;

  ${(props) =>
    props.select === "active"
      ? `
      background: #779BE0;
      color: white;
  `
      : `
      background: #CCD4E4;
      font-color: 49446B;
`}
`;

const BillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const PagenationContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const sortType = {
  1: "최신순",
  2: "인기순",
};

const BillListPage = () => {
  // pagination
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  // bills
  const [bills, setBills] = useState([]);

  // sort, page, state가 변할 때 렌더링
  useEffect(() => {
    console.log("useEffect BillListPage!");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/bill/list?sort=${sort}&page=${page}`
        );
        setBills(response.data.bills);
        console.log(response.data.bills);
        console.log(response.data.bills.length);
        setTotalPage(response.data.bills.length);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [sort, page]);

  // sort Event 1: 최신순, 2: 인기순
  const sortEvent = (e) => {
    console.log(e.target.name);
    e.target.name === "최신순" ? setSort(1) : setSort(2);
  };

  // 의안 목록 생성
  const listItem = () => {
    const billList = bills.map((bill) => {
      return <BillCard key={bill.id} content={bill} />;
    });
    //console.log(billList.length);

    return billList;
  };

  return (
    <div>
      <CategoryList>카테고리 목록이 들어갑니다.</CategoryList>
      <div style={{ height: "20px" }} />
      <BillPageContainer>
        <SelectSortContaier>
          {/*sort*/}
          <SelectSortBox>
            {Object.values(sortType).map((sortType, index) => (
              <SelectSortBtn
                key={index + 1}
                name={sortType}
                onClick={sortEvent}
                select={sort === index + 1 ? "active" : "default"}
              >
                {sortType}
              </SelectSortBtn>
            ))}
          </SelectSortBox>
        </SelectSortContaier>
        <BillCardContainer>
          {/*의안 목록*/}
          {listItem()}
        </BillCardContainer>
        <div style={{ height: "70px" }} />
        <PagenationContainer>
          {/*페이지네이션*/}
          <Paginate page={page} setPage={setPage} totalPage={totalPage} />
        </PagenationContainer>
      </BillPageContainer>
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default BillListPage;

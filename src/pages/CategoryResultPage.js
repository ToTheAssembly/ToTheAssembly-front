import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BillCard from "../components/Common/BillCard.js";
import { useLocation } from "react-router-dom";
import Paginate from "../components/Common/Paginate.js";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
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

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #49446b;
`;

const Result = styled.div`
  font-size: 25px;
  font-family: Pretendard;
  text-align: center;
  margin-left: 8px;
`;

const CategoryResultPage = () => {
  // search list
  const [bills, setBills] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  // navigate
  const location = useLocation();
  const category = location.state;

  // 첫 렌더링 실행
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/bill/category/search/${category}`
        );
        console.log(response.data);
        setBills(response.data.bills);
        setTotalPage(response.data.bills.length);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  // 의안 목록 생성
  const listItem = () => {
    const billList = bills.map((bill) => {
      return <BillCard key={bill.id} content={bill} />;
    });

    return billList;
  };

  return (
    <div>
      <div style={{ height: "70px" }} />
      <ResultContainer>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "40px" }}
        />
        <Result>{category}에 대한 검색결과입니다.</Result>
      </ResultContainer>

      <div style={{ height: "40px" }} />
      <CategoryPageContainer>
        <BillCardContainer>
          {/*의안 목록*/}
          {listItem()}
        </BillCardContainer>
        <div style={{ height: "70px" }} />
        <PagenationContainer>
          {/*페이지네이션*/}
          <Paginate page={page} setPage={setPage} totalPage={totalPage} />
        </PagenationContainer>
      </CategoryPageContainer>
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default CategoryResultPage;

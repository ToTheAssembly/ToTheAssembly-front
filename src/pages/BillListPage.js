import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BillCard from "../components/Common/BillCard.js";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Paginate from "../components/Common/Paginate.js";
import axios from "axios";
import Category from "../components/Common/Category.js";

const BillPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: auto;
  background: #edf4fa;
  padding: 30px 30px;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px 30px;
  margin: 0 250px;
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
  const [category, setCategory] = useState([]);

  // bills
  const [bills, setBills] = useState([]);

  // category 렌더링
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/bill/list?sort=${sort}&page=${page}`
        );

        setBills(response.data.bills);
        setTotalPage(response.data.bills.length);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [sort, page]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/bill/category/categoryList`);
        setCategory(response.data.categories);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

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
  // 카테고리 목록 생성
  const listCategory = () => {
    // 카테고리 map
    console.log(category);
    const list = category.slice(0, 10);
    const categories = list.map((cat, index) => {
      return <Category key={index} category={cat.category} />;
    });
    //console.log(billList.length);

    return categories;
  };

  return (
    bills && (
      <div>
        <CategoryList>
          <CategoryBox>{listCategory()}</CategoryBox>
        </CategoryList>
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
    )
  );
};

export default BillListPage;

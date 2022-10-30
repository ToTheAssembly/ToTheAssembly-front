import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BillCard from "../components/Common/BillCard.js";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Paginate from "../components/Common/Paginate.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BillPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background: #edf4fa;
  padding: 30px 30px;
  font-family: Pretendard;
`;

const CategoryBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  margin: 10px;
  font-size: 40px;
  justify-content: space-around;
`;

const SearchCategoryBtn = styled(Link)`
  background: #779be0;
  padding: 5px 30px;
  font-size: 20px;
  text-decoration: none;
  color: white;
  border-radius: 5px;
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

  // category
  const [searchCat, setSearchCat] = useState("");

  const [midCategory, setMidCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [mainTitle, setMainTitle] = useState("대분류");
  const [midTitle, setMidTitle] = useState("중분류");
  const [subTitle, setSubTitle] = useState("소분류");

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/api/bill/category/categoryList`);
  //       setCategory(response.data.categories);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  /* category arrays */
  // 대분류
  const mainCategory = ["공법", "사법", "사회법", "기타"];

  // 중분류
  const midCatPublic = ["행정법", "형법"]; // 공법
  const midCatPrivate = ["민법", "상법"]; // 사법
  const midCatSocial = ["노동법", "경제법", "사회보장기본법"]; // 사회법
  const midCatOthers = [
    "부패·동물·의약품·유해물질·위생",
    "정보보호·인터넷·저작권",
  ]; // 기타

  // 소분류
  const subCatAdmin = [
    "선거·투표·정치",
    "국회·기관·위원회·운영",
    "표현·제정·법률용어",
  ]; // 행정법
  const subCatCriminal = [
    "형벌·범죄·상속·파산·모욕",
    "범죄·성범죄·보호·아동·청소년",
    "사건·재판·수사·고위공직범죄",
  ]; // 형법
  const subCatCivil = [
    "주택·부동산·토지·임대·세금",
    "회계·세금·연금·재산·감사조사",
  ]; // 민법
  const subCatCommercial = [
    "소득·기업·과세·특례·공제",
    "금융·보험·은행·투자·급여",
  ]; // 상법
  const subCatLabor = ["근로·고용·사업", "공직자·채용·징계·퇴직"]; // 노동법
  const subCatEconomic = [
    "산업·에너지·기술·지원·진흥",
    "전자상거래·유통·방송·광고·게임",
    "사회·문화·기술·관광·역사",
    "지방·국가·인구·균형발전",
    "환경·도시·지역·개발",
  ]; // 경제법
  const subCatSocialguarantee = [
    "연금·유공·유족·보상·의료",
    "감염병·재난·피해·지원·소상공인",
    "지원·복지·보호·사회적약자",
    "교육·학교·보건·의료·청소년",
    "관리·안전·보호·의료",
    "안전·자동차·교통·사고·어린이·건축물",
  ]; // 사회보장기본법

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

  // 대분류: 카테고리 선택
  const displayMidCategory = (eventKey) => {
    let temp;
    if (eventKey === "공법") {
      temp = midCatPublic;
    } else if (eventKey === "사법") {
      temp = midCatPrivate;
    } else if (eventKey === "사회법") {
      temp = midCatSocial;
    } else if (eventKey === "기타") {
      temp = midCatOthers;
    }

    setMidCategory(temp);
    setMainTitle(eventKey);

    // 대분류 이하의 카테고리 초기화
    setMidTitle("중분류");
    setSubTitle("소분류");
  };

  // 중분류: 카테고리 선택
  const displaySubCategory = (eventKey) => {
    let temp;
    let others = false;

    if (eventKey === "행정법") {
      temp = subCatAdmin;
    } else if (eventKey === "형법") {
      temp = subCatCriminal;
    } else if (eventKey === "민법") {
      temp = subCatCivil;
    } else if (eventKey === "상법") {
      temp = subCatCommercial;
    } else if (eventKey === "노동법") {
      temp = subCatLabor;
    } else if (eventKey === "경제법") {
      temp = subCatEconomic;
    } else if (eventKey === "사회보장기본법") {
      temp = subCatSocialguarantee;
    } else {
      setSearchCat(eventKey);
      setSubTitle("범주에 해당하는 소분류가 없습니다.");
      temp = [""];
      others = true;
    }

    setSubCategory(temp);
    setMidTitle(eventKey);

    // 중분류 이하의 카테고리 초기화
    // 소분류가 존재하지 않는 경우, 초기화하지 않는다.
    if (!others) setSubTitle("소분류");
  };

  // 소분류: 카테고리 선택
  const displaySubTitle = (eventKey) => {
    setSubTitle(eventKey);
    setSearchCat(eventKey);
  };

  return (
    bills && (
      <div>
        <CategoryList>
          <CategoryBox>
            <DropdownButton
              variant="outline-secondary"
              title={mainTitle}
              onSelect={displayMidCategory}
              size="lg"
              style={{ margin: "5px" }}
            >
              {mainCategory.map((cat, index) => {
                return (
                  <Dropdown.Item key={index} eventKey={cat}>
                    {cat}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <DropdownButton
              variant="outline-secondary"
              title={midTitle}
              onSelect={displaySubCategory}
              size="lg"
              style={{ margin: "5px" }}
            >
              {midCategory.map((cat, index) => {
                return (
                  <Dropdown.Item key={index} eventKey={cat}>
                    {cat}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <DropdownButton
              variant="outline-secondary"
              title={subTitle}
              onSelect={displaySubTitle}
              size="lg"
              style={{ margin: "5px" }}
            >
              {subCategory.length <= 0 ? (
                <></>
              ) : (
                subCategory.map((cat, index) => {
                  return (
                    <Dropdown.Item key={index} eventKey={cat}>
                      {cat}
                    </Dropdown.Item>
                  );
                })
              )}
            </DropdownButton>
          </CategoryBox>
          {/*search category button*/}
          {subTitle === "소분류" ? (
            <SearchCategoryBtn to={"#"} state={searchCat}>
              카테고리 검색 &nbsp;
              <FontAwesomeIcon icon={faSearch} />
            </SearchCategoryBtn>
          ) : (
            <SearchCategoryBtn
              to={`/category/search/${searchCat}`}
              state={searchCat}
            >
              카테고리 검색&nbsp;
              <FontAwesomeIcon icon={faSearch} />
            </SearchCategoryBtn>
          )}
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

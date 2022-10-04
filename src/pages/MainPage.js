import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tag from "../components/Common/Tag";
import { faBreadSlice, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchBackground = styled.div`
  height: 480px;
  background: #edf4fa;
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 160px 0 0 0;
  text-align: center;
`;
const Input = styled.input`
  background: #edf4fa;
  border: 0px solid black;
  width: 550px;
  height: 30px;
  font-size: 20px;
  padding: 10px;
  margin: 0;
  &: focus {
    outline: none;
  }
`;
const InputUnderLine = styled.hr`
  display: block;
  width: 600px;
  margin: 3px 0 0 0;
`;

const SearchButton = styled(Link)`
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  margin: 0;
  padding: 3px;
`;

const TagBox = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-family: Pretendard;
`;

// 의안 총계
const BillCountContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 320px;
  max-width: 900px;
  margin: auto;
  background: white;
`;

const CIRCLESTYLE = {
  // background-color, font-size
  thisMonth: ["#CCD4E4", ""],
  thisWeek: ["#CCD4E4", ""],
  totalCount: ["#A39DBC", ""],
  title: ["", "24px"],
  count: ["", "48px"],
};

const BillCountCircle = styled.div`
  width: 200px;
  min-width: 200px;
  height: 200px;
  min-height: 200px;
  margin: 60px auto;
  padding: 50px 0 0 0;
  text-align: center;
  vertical-align: center;
  background-color: ${(props) => CIRCLESTYLE[props.type][0]};
  border-radius: 100px;
`;
const BillCount = styled.p`
  margin: auto;
  padding: auto;
  font-family: Pretendard;
  color: black;
  font-size: ${(props) => CIRCLESTYLE[props.type][1]};
`;

const Title = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: #49446b;
  font-size: 32px;
  margin: 60px auto 20px;
  text-align: center;
  max-width: 900px;
`;

const TEXTSTYLE = {
  // color, font-size
  "popular-title": ["#C4C4D7", "22px"],
  "popular-text": ["white", "18px"],
  "recency-title": ["#49446B", "22px"],
  "recency-text": ["black", "18px"],
  "trend-title": ["#FFEF60", "22px"],
};

const SubTitle = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: ${(props) => TEXTSTYLE[props.type][0]};
  font-size: ${(props) => TEXTSTYLE[props.type][1]};
  max-width: 900px;
  margin: 0 0 6px 0;
`;
const ContentText = styled.div`
  font-family: Pretendard;
  color: ${(props) => TEXTSTYLE[props.type][0]};
  font-size: ${(props) => TEXTSTYLE[props.type][1]};
`;

// 인기, 최신, 트렌드 분석
const HotContainer = styled.div`
  display: relative;
  min-height: 600px;
  background-color: #edf4fa;
`;

// 인기
const PopularContainer = styled.div`
  padding: 20px;
  height: 210px;
  background-color: #49446b;
  margin: 20px 0 0 0;
`;
// 최신
const RecencyContainer = styled.div`
  padding: 20px;
  height: 210px;
  background-color: #c4c4d7;
  margin: 20px 0 0 0;
`;
// 트렌드 분석 페이지로 이동
const TrendContainer = styled.div`
  padding: 20px;
  height: 440px;
  background-color: #779be0;
  margin: 20px 0 0 0;
`;

const MainPage = ({ history }) => {
  const [hashtag, setHashtag] = useState([]);

  const [thisWeek, setThisWeek] = useState(0);
  const [thisMonth, setThisMonth] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const [recentBill, setResentBill] = useState([]);
  const [popularBill, setPopularBill] = useState([]);

  // search
  const navigate = useNavigate();
  const [word, setWord] = useState("");

  useEffect(() => {
    axios.get(`/api/hashtag/random`).then((response) => {
      if (response.data.success) {
        setHashtag(response.data.randomhash);
      }
    });
  }, []);

  const TagList = hashtag?.map((data, index) => {
    return <Tag hashtag={data} key={index} />;
  });

  useEffect(() => {
    axios.get(`/api/bill/count`).then((response) => {
      if (response.data.success) {
        setThisWeek(response.data.thisWeek);
        setThisMonth(response.data.thisMonth);
        setTotalCount(response.data.totalCount);
      }
    });
  }, []);

  // 이번 주 인기 의안
  useEffect(() => {
    axios.get(`/api/bill/thisWeek`).then((response) => {
      if (response.data.success) {
        const bills = response.data.bills.slice(0, 5);
        setPopularBill(bills);
      }
    });
  }, []);
  const PopularBillList = popularBill?.map((data, index) => {
    return (
      <ContentText key={index} type={"popular-text"}>
        · {data}
      </ContentText>
    );
  });

  // 최근 발의된 의안
  useEffect(() => {
    axios.get(`/api/bill/list?page=1&sort=1`).then((response) => {
      if (response.data.success) {
        const bills = response.data.bills.slice(0, 5);
        setResentBill(bills);
      }
    });
  }, []);
  const RecentBillList = recentBill?.map((data, index) => {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/bill/detail/${data.id}`}
        state={{ billId: data.id }}
      >
        <ContentText type={"recency-text"}>· {data.title}</ContentText>
      </Link>
    );
  });

  // 키워드 변경, state에 저장
  const changeWord = (e) => {
    setWord(e.target.value);
  };

  // 페이지 이동
  const movePage = () => {
    console.log(word);
    navigate(`/search/${word}`, {
      state: {
        word: word,
      },
    });
  };

  return (
    true && (
      <>
        <SearchBackground>
          <SearchContainer>
            <Input
              type="text"
              placeholder="검색어를 입력하세요"
              onChange={changeWord}
            />
            <SearchButton to={`/search/${word}`}>
              <FontAwesomeIcon icon={faSearch} color="black" fontSize="26px" />
            </SearchButton>
            <InputUnderLine />

            <TagBox>{hashtag && TagList}</TagBox>
          </SearchContainer>
        </SearchBackground>

        <Title>의안 수 총계</Title>

        <BillCountContainer>
          <BillCountCircle type={"thisMonth"}>
            <BillCount type={"title"}>이번 달 의안</BillCount>
            <BillCount type={"count"}>{thisMonth}</BillCount>
          </BillCountCircle>
          <BillCountCircle type={"thisWeek"}>
            <BillCount type={"title"}>이번 주 의안</BillCount>
            <BillCount type={"count"}>{thisWeek}</BillCount>
          </BillCountCircle>
          <BillCountCircle type={"totalCount"}>
            <BillCount type={"title"}>제21대 국회</BillCount>
            <BillCount type={"count"}>{totalCount}</BillCount>
          </BillCountCircle>
        </BillCountContainer>

        <HotContainer clas="container">
          <Row style={{ margin: "auto", padding: "50px 0", maxWidth: "960px" }}>
            <Col xs={12} sm={6} style={{}}>
              <PopularContainer>
                <SubTitle type={"popular-title"}>이번 주 인기 의안</SubTitle>
                {!popularBill ? (
                  PopularBillList
                ) : (
                  <>
                    <ContentText type={"popular-text"}>
                      · 인기 의안1
                    </ContentText>
                    <ContentText type={"popular-text"}>
                      · 인기 의안2
                    </ContentText>
                    <ContentText type={"popular-text"}>
                      · 인기 의안3
                    </ContentText>
                  </>
                )}
              </PopularContainer>
              <RecencyContainer>
                <SubTitle type={"recency-title"}>최근 발의된 의안</SubTitle>
                {recentBill && RecentBillList}
              </RecencyContainer>
            </Col>
            <Col xs={12} sm={6} style={{}}>
              <TrendContainer>
                <SubTitle type={"trend-title"}>트렌드 분석 ▶▶</SubTitle>
                <ContentText type={"recency-text"}>토픽 분석</ContentText>
              </TrendContainer>
            </Col>
          </Row>
        </HotContainer>
      </>
    )
  );
};

export default MainPage;

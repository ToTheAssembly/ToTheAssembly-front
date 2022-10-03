import React, { useEffect, useState } from "react";
import BillList from "../components/List/BillList";
import styled from "styled-components";
import MemberList from "../components/List/MemberList";
import TagList from "../components/List/TagList";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../components/Common/Spinner";

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
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

// 값을 받으려나?
const SearchResultPage = () => {
  const keyword = useParams().keyword;

  // search data
  const [bills, setBills] = useState([]);
  const [members, setMembers] = useState([]);
  const [hashtags, setHashtags] = useState([]);

  const [spinner, setSpinner] = useState(null);

  useEffect(() => {
    setSpinner(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/search?q=${keyword}`);
        console.log(response.data);
        setBills(response.data.bills);
        setMembers(response.data.members);
        setHashtags(response.data.hashtags);
        setSpinner(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <>
      <div style={{ height: "70px" }} />
      <ResultContainer>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "40px" }}
        />
        <Result>{keyword}에 대한 검색결과입니다.</Result>
      </ResultContainer>
      {spinner ? (
        <Spinner />
      ) : (
        <PageContainer>
          <div style={{ height: "40px" }} />
          <BillList content={bills} />
          <div style={{ height: "70px" }} />
          <MemberList props={members} />
          <div style={{ height: "70px" }} />
          <TagList content={hashtags} />
          <div style={{ height: "100px" }} />
        </PageContainer>
      )}
    </>
  );
};

export default SearchResultPage;

import React, { useEffect, useState } from "react";
import BillList from "../components/List/BillList";
import styled from "styled-components";
import MemberList from "../components/List/MemberList";
import TagList from "../components/List/TagList";
import axios from "axios";
import { useParams } from "react-router-dom";

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

// 값을 받으려나?
const SearchResultPage = () => {
  const keyword = useParams().word;

  // search data
  const [bills, setBills] = useState([]);
  const [members, setMembers] = useState([]);
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/search?q=${keyword}`);
        console.log(response.data);
        setBills(response.data.bills);
        setMembers(response.data.members);
        setHashtags(response.data.hashtags);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <PageContainer>
      <div style={{ height: "70px" }} />
      {/* <BillList content={setBills} /> */}
      <div style={{ height: "70px" }} /> 
      <MemberList props={members} />
      <div style={{ height: "70px" }} />
      <TagList content={hashtags} />
      <div style={{ height: "100px" }} />
    </PageContainer>
  );
};

export default SearchResultPage;

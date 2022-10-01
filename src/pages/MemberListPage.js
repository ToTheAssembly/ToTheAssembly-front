import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import MemberCard from '../components/Common/MemberCard';
import Paginate from '../components/Common/Paginate';

const PageContainer = styled.div`
  margin: 0 auto;
`;

const MemberFilter = styled.div`
  height: 160px; 
  background-color: #d9d9d9;
`

const MemberCardContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 5%;
  max-width: 1000px;
  max-height: 1000px;
`;

const PagenationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content
  margin: 0 auto;
`;

const MemberListPage = () => {
  const [members, setMembers] = useState([]);  // 의원 목록
  const [filter, setFilter] = useState(1);  // 정당 필터링 1 to 6
  // pagination
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  
  useEffect(() => {
    axios.get(`/api/member/list?page=${page}`).then((response) => {
      if (response.data.success) {
        setMembers(response.data.members);
      }
    });
  }, [page, filter]);

  const CardList = members?.map((data, index) => {
    return <MemberCard data={data} key={index} />;
  });
  
  return ( members &&
    <div>
      <PageContainer>
      <MemberFilter />
      <div style={{height: '60px'}} />
        <MemberCardContainer>
          <Row style={{width: '100%'}}>
            {CardList}
          </Row>
        </MemberCardContainer>
        <div style={{height: '100px'}} />
        <PagenationContainer>
          {/*페이지네이션*/}
          <Paginate page={page} setPage={setPage} totalPage={totalPage} />
        </PagenationContainer>
      </PageContainer>
    </div>
  );
};

export default MemberListPage;
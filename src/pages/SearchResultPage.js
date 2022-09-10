import React from 'react';
import BillList from '../components/List/BillList';
import styled from "styled-components";
import MemberList from '../components/List/MemberList';
import TagList from '../components/List/TagList'

const PageContainer = styled.div`
  margin: 0 30px;
`;

const SearchResultPage = () => {
  return (
    <PageContainer>
      <BillList />
      <MemberList />
      <TagList />
    </PageContainer>
  )
}

export default SearchResultPage;

import React from 'react';
import BillList from '../components/List/BillList';
import styled from "styled-components";
import MemberList from '../components/List/MemberList';
import TagList from '../components/List/TagList'

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const SearchResultPage = () => {
  return (
    <PageContainer>
      <div style={{height: '70px'}} />
      <BillList />
      <div style={{height: '70px'}} />
      <MemberList />
      <div style={{height: '70px'}} />
      <TagList />
      <div style={{height: '100px'}} />
    </PageContainer>
  )
}

export default SearchResultPage;

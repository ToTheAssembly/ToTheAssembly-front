import React from 'react';
import styled from "styled-components";
import BillDetail from '../components/Detail/BillDetail';
import SimilarBillList from '../components/Detail/SimilarBillList';
import SimilarMemberList from '../components/Detail/SimilarMemberList';

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const BillDetailPage = () => {
  return (
    <PageContainer>
      <BillDetail />
      <div style={{height: '70px'}} />
      <SimilarBillList />
      <div style={{height: '70px'}} />
      <SimilarMemberList />
      <div style={{height: '100px'}} />
    </PageContainer>
  )
}

export default BillDetailPage;

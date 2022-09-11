import React from 'react';
import styled from "styled-components";
import BillDetail from '../components/Detail/BillDetail';
import SimilarBillList from '../components/Detail/SimilarBillList';
import SimilarMemberList from '../components/Detail/SimilarMemberList';

const PageContainer = styled.div`
  margin: 10px 30px 10px 30px;
`;

const BillDetailPage = () => {
  return (
    <PageContainer>
      <BillDetail />
      <SimilarBillList />
      <SimilarMemberList />
    </PageContainer>
  )
}

export default BillDetailPage;

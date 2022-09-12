import React from 'react';
import styled from "styled-components";
import MemberCard from '../components/MemberCard';
import Row from 'react-bootstrap/Row';

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
`;

const MemberListPage = () => {
  return (
    <div>
      <PageContainer class="container">
      <MemberFilter />
      <div style={{height: '60px'}} />
        <MemberCardContainer>
          <Row>
            <MemberCard memberContent={1} />
            <MemberCard memberContent={2} />
            <MemberCard memberContent={3} />
            <MemberCard memberContent={4} />
            <MemberCard memberContent={5} />
            <MemberCard memberContent={6} />
            <MemberCard memberContent={7} />
          </Row>
        </MemberCardContainer>
        <div style={{height: '100px'}} />
      </PageContainer>
    </div>
  );
};

export default MemberListPage;
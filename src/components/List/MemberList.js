import React from 'react';
import MemberCard from '../MemberCard'
import styled from "styled-components";


const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:  space-between;
  align-items: center;
  padding: 20px;
  background: #7A7398;
`;

const MemberTitle = styled.div`
  margin: 40px 0 10px 0;
  color: #49446B;
  font-size: 15px;
  font-family: Pretendard;
`;

const MemberList = ({memberList}) => {
  // 검색어와 관련된 memberList를 가져온다.
  return (
    <div>
      <MemberTitle>■ 의원(4)</MemberTitle>
      <MemberContainer>
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </MemberContainer>
    </div>
  )
}

export default MemberList;

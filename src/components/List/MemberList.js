import React from "react";
import MemberCard from "../Common/MemberCard";
import styled from "styled-components";

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #7a7398;
`;

const MemberTitle = styled.div`
  margin: 0 0 10px 0;
  color: #49446b;
  font-size: 25px;
  font-family: Pretendard;
`;

const MemberList = (props) => {
  const data = props.data || null;

  const CardList = data?.map((data, index) => {
    return <MemberCard data={data} key={index} />;
  });

  return (
    <div>
      <MemberTitle>■ 의원(4)</MemberTitle>
      <MemberContainer>{CardList}</MemberContainer>
    </div>
  );
};

export default MemberList;

import React from "react";
import MemberCard from "../Common/MemberCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #7a7398;
`;

const MemberBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const MemberTitle = styled.div`
  margin: 0 0 10px 0;
  color: #49446b;
  font-size: 25px;
  font-family: Pretendard;
`;

const MorePage = styled(Link)`
  width: auto;
  margin-left: auto;
  color: white;
  border: none;
  background: none;
  font-family: Pretendard;
  font-size: 22px;
  text-decoration: none;
`;

const MemberList = (props) => {
  const data = props.props || null;
  const sliceData = data.slice(0, 4) || null;
  console.log(data);

  const CardList = sliceData?.map((data, index) => {
    return <MemberCard data={data} key={index} />;
  });

  return (
    <div>
      <MemberTitle>■ 의원({data.length})</MemberTitle>
      <MemberContainer>
        <MemberBox>{CardList}</MemberBox>
        <MorePage>더보기</MorePage>
      </MemberContainer>
    </div>
  );
};

export default MemberList;

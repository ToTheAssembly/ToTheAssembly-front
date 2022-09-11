import React from 'react';

import styled from "styled-components";
import MemberCard from '../MemberCard';
import Tag from '../Common/Tag'


const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  font-family: Pretendard
`;

const Summary = styled.div`
  color: white;
  font-size: 13px;
  font-family: Pretendard;
`;

const SimilarMemberCard = ({member}) => {
  // member: 국회의원의 정보(json)
  return (
    <div>
      <MemberContainer>
        <MemberCard  />
          <ContentBox>
            <Summary>자원의 절약과 재활용촉진에 관한 법률 일부개정법률안</Summary>
            <TagBox>
              <Tag hashtag={"태그"} />
              <Tag hashtag={"태그"} />
              <Tag hashtag={"태그"} />
            </TagBox>
          </ContentBox>
      </MemberContainer>
    </div>
  )
}

export default SimilarMemberCard;
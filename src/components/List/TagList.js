import React from 'react';
import styled from "styled-components";
import Tag from '../Common/Tag';

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 30px 0;
  padding: 20px;
  background: #EDF4FA;
`;

const TagTitle = styled.div`
  margin: 0 0 10px 0;
  color: #49446B;
  font-size: 25px;
  font-family: Pretendard;
`;

const TagList = ({tagList}) => {
  // 검색어와 관련된 tagList를 가져온다.
  return (
    <div>
      <TagTitle>■ 해시태그(6)</TagTitle>
      <TagBox>
        <Tag hashtag={"태그1"} />
        <Tag hashtag={"태그2"} />
        <Tag hashtag={"태그3"} />
        <Tag hashtag={"태그4"} />
        <Tag hashtag={"태그5"} />
        <Tag hashtag={"태그6"} />
      </TagBox>
    </div>
  )
}

export default TagList;

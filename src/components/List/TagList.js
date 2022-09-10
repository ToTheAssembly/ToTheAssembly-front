import React from 'react';
import styled from "styled-components";
import Tag from '../Common/Tag';

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #EDF4FA;
  padding: 20px;
  margin: 0 0 30px 0;
`;

const TagTitle = styled.div`
  margin: 40px 0 10px 0;
  color: #49446B;
  font-size: 15px;
`;

const TagList = ({tagList}) => {
  // 검색어와 관련된 tagList를 가져온다.
  return (
    <div>
      <TagTitle>■ 해시태그(6)</TagTitle>
      <TagContainer>
        <Tag hashtag={"태그1"} />
        <Tag hashtag={"태그2"} />
        <Tag hashtag={"태그3"} />
        <Tag hashtag={"태그4"} />
        <Tag hashtag={"태그5"} />
        <Tag hashtag={"태그6"} />
      </TagContainer>
    </div>
  )
}

export default TagList;

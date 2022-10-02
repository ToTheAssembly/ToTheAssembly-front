import React from 'react';
import styled from "styled-components";

const TagText = styled.div`
  display: flex;
  margin: 3px;
  padding: 0.5px 5px;
  color: #779BE0;
  background: white;
  border-radius: 3px;
  font-size: 20px;
  font-family: Pretendard
`;

const Tag = ({hashtag}) => {
  // hashtag: string
  return (
    <TagText>
      #{hashtag}
    </TagText>
  )
}

export default Tag;

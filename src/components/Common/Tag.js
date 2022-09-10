import React from 'react';
import styled from "styled-components";

const TagText = styled.div`
  display: flex;
  color: #779BE0;
  padding: 0.5px 5px;
  font-size: 13px;
  background: white;
  border-radius: 3px;
  margin: 0 1px;
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

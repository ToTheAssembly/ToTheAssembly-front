import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TagText = styled(Link)`
  display: flex;
  margin: 3px;
  padding: 0.5px 5px;
  color: #779be0;
  background: white;
  border-radius: 3px;
  font-size: 20px;
  font-family: Pretendard;
  text-decoration: none;
`;

const Tag = ({ hashtag }) => {
  // hashtag: string
  return (
    <TagText to={`/hashtag/search/${hashtag}`} state={hashtag}>
      #{hashtag}
    </TagText>
  );
};

export default Tag;

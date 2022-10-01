import React from "react";
import styled from "styled-components";
import Tag from "../Common/Tag";

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 30px 0;
  padding: 20px;
  background: #edf4fa;
`;

const TagTitle = styled.div`
  margin: 0 0 10px 0;
  color: #49446b;
  font-size: 25px;
  font-family: Pretendard;
`;

const TagList = ({ content }) => {
  const count = content.length;
  //console.log(content);

  return (
    <div>
      <TagTitle>■ 해시태그({count})</TagTitle>
      <TagBox>
        {content.map((tag) => {
          return <Tag key={tag} hashtag={tag} />;
        })}
      </TagBox>
    </div>
  );
};

export default TagList;

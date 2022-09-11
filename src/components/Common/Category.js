import React from 'react';
import styled from "styled-components";

const CategoryBox = styled.div`
  float: left;
  width: auto;
  display: inline-block;
  justify-content: center;
  background: #CCD4E4;
  padding: 3px 30px;
  font-size: 12px;
`;

const CategoryText = styled.div`
  display: inline-block;
  font-size: 13px;
  font-family: Pretendard
`;

const Category = ({category}) => {
  return (
    <CategoryBox>
      <CategoryText>
        {category}
      </CategoryText>
    </CategoryBox>
  )
}

export default Category;

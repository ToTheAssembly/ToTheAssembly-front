import React from "react";
import styled from "styled-components";

const CategoryBox = styled.div`
  width: auto;
  min-width: 200px;
  display: inline-block;
  justify-content: center;
  float: left;
  padding: 6px 30px;
  background: #ccd4e4;
  font-size: 12px;
  text-align: center;
`;

const CategoryText = styled.div`
  display: inline-block;
  font-size: 18px;
  font-family: Pretendard;
`;

const Category = ({ category }) => {
  return (
    <CategoryBox>
      <CategoryText>{category}</CategoryText>
    </CategoryBox>
  );
};

export default Category;

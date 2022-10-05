import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryBox = styled(Link)`
  width: auto;
  min-width: 200px;
  display: inline-block;
  padding: 6px 30px;
  background: #ccd4e4;
  font-size: 12px;
  text-align: center;
  margin: 5px;
  text-decoration: none;
  color: black;
`;

const CategoryText = styled.div`
  font-size: 18px;
  font-family: Pretendard;
`;

const Category = ({ category }) => {
  return (
    <CategoryBox to={`/category/search/${category}`} state={category}>
      <CategoryText>{category}</CategoryText>
    </CategoryBox>
  );
};

export default Category;

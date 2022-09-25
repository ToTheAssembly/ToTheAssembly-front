import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";

const Paginate = ({ page, setPage, totalPage }) => {
  // 이벤트 핸들링: page
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      {/*페이지네이션*/}
      <Pagination
        activePage={page} // 현재 페이지
        itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
        totalItemsCount={23} // 총 아이템 갯수
        pageRangeDisplayed={5} // paginator의 페이지 범위
        prevPageText={"‹"} // "이전"을 나타낼 텍스트
        nextPageText={"›"} // "다음"을 나타낼 텍스트
        onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
      />
    </>
  );
};

export default Paginate;

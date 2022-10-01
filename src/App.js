import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/Common/ScrollToTop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import BillListPage from "./pages/BillListPage";
import BillDetailPage from "./pages/BillDetailPage";
import MemberListPage from "./pages/MemberListPage";
import MemberDetailPage from "./pages/MemberDetailPage";
import SearchResultPage from "./pages/SearchResultPage";
import VocaPage from "./pages/VocaPage";
import TrendPage from "./pages/TrendPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bill" element={<BillListPage />} />
        <Route path="/bill/detail/:billId" element={<BillDetailPage />} />
        <Route path="/member" element={<MemberListPage />} />
        <Route path="/member/detail" element={<MemberDetailPage />} />
        <Route path="/search/:keyword" element={<SearchResultPage />} />
        <Route path="/voca" element={<VocaPage />} />
        <Route path="/trend" element={<TrendPage />} />
      </Routes>
    </>
  );
}

export default App;

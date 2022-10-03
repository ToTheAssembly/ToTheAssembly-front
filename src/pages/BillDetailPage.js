import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BillDetail from "../components/Detail/BillDetail";
import SimilarBillList from "../components/Detail/SimilarBillList";
import SimilarMemberList from "../components/Detail/SimilarMemberList";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Common/Spinner";

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const BillDetailPage = () => {
  const { billId } = useParams();
  console.log("billId: ", billId);

  const [bills, setBills] = useState([]);
  const [members, setMembers] = useState([]);
  const [spinner, setSpinner] = useState(null);

  useEffect(() => {
    setSpinner(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/bill/${billId}/similar`);
        setBills(response.data.bills);
        setMembers(response.data.members);
        console.log(response.data);
        setSpinner(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [billId]);

  return (
    <PageContainer>
      <BillDetail billId={billId} />
      <div style={{ height: "70px" }} />
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <SimilarBillList data={bills} />
          <div style={{ height: "70px" }} />
          <SimilarMemberList data={members} />
          <div style={{ height: "100px" }} />
        </>
      )}
    </PageContainer>
  );
};

export default BillDetailPage;

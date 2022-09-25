import styled from "styled-components";
import BillCard from "../Common/BillCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const BillContainer = styled.div`
  padding: 5px;
  background: #c4c4d7;
`;

const Title = styled.div`
  margin-left: 5px;
  color: #49446b;
  font-size: 24px;
  font-weight: 700;
  font-family: Pretendard;
`;

const SimilarBillList = (billId) => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    console.log("SimilarBillList");
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/bill/${billId.billId}/similar`);
        setBills(response.data.bills);
        console.log(response.data.bills);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Title>유사한 의안</Title>
      <BillContainer>
        {bills.length != 0 ? (
          bills.map((bill) => {
            return <BillCard key={bill.bill_num} content={bill} />;
          })
        ) : (
          <></>
        )}
      </BillContainer>
    </div>
  );
};

export default SimilarBillList;

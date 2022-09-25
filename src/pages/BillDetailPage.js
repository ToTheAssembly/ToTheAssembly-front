import styled from "styled-components";
import BillDetail from "../components/Detail/BillDetail";
import SimilarBillList from "../components/Detail/SimilarBillList";
import SimilarMemberList from "../components/Detail/SimilarMemberList";
import { useParams } from "react-router-dom";

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const BillDetailPage = () => {
  const { billId } = useParams();
  //console.log("billId: ", billId);

  return (
    <PageContainer>
      <BillDetail billId={billId} />
      <div style={{ height: "70px" }} />
      {/* <SimilarBillList billId={billId} /> */}
      <div style={{ height: "70px" }} />
      <SimilarMemberList />
      <div style={{ height: "100px" }} />
    </PageContainer>
  );
};

export default BillDetailPage;

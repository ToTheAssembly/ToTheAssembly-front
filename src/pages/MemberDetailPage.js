import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BillCard from '../components/Common/BillCard';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Paginate from '../components/Common/Paginate';

const PageContainer = styled.div`
  margin: 0 auto;
`;

const MemberImage = styled.img`
  display: block;
  width: 270px;
  height: 360px;
  background: #D9D9D9;
  position: relative;
  margin: auto;
`

const TEXTSTYLE = {
  // background-color, color
  "국민의힘": ['#F01C2A', 'white'],
  "더불어민주당": ['#004EA1', 'white'],
  "정의당": ['#FFED00', 'black'],
  "기본소득당": ['#00D2C3', '#19233C'],
  "시대전환당": ['#EDD9EB','#4F2685'],
  "무소속": ['#505050', '#ffffff']
}

const MemberParty = styled.p`
  width: 130px;
  text-align: center;
  font-family: pretendard;
  font-size: 18px;
  background-color: ${props => TEXTSTYLE[props.type][0]};
  color: ${props => TEXTSTYLE[props.type][1]};
  margin: auto;
`

const MemberInfoRow = styled.div`
  margin: 12px; 
  clear: both;
`

const MemberInfoAttr = styled.div`
  display: inline-block;
  width: 100px;
  height: 32px;
  border-radius: 3px;
  text-align: center;
  padding: 5px;
  font-family: pretendard;
  font-size: 16px;
  background-color: #A39DBC;
  color: white;
`

const MemberInfoContent = styled.div`
  display: inline-block;
  font-family: pretendard;
  font-size: 16px;
  color: black;
  margin: 0 16px;
`

const Title = styled.div`
  font-family: Pretendard;
  color: #49446B;
  font-size: 24px;
  margin: 30px auto 20px;
  max-width: 900px
`

const BillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 900px;
`;

const PagenationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content
  margin: 0 auto;
`;

const MemberDetailPage = (props) => {
  const location = useLocation();
  const memberId = location.state.data;
  const [member, setMember] = useState([]);
  // 의원이 발의한 의안 목록
  const [bills, setBills] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  
  useEffect(() => {
    axios.get(`/api/member/${memberId}`).then((response) => {
      console.log(response);
      if (response.data.success) {
        setMember(response.data.member);
      }
    });
  }, [memberId]);

  useEffect(() => {
    axios.get(`/api/bill/name/${memberId}?page=${pageNum}`).then((response) => {
      if (response.data.success) {
        setBills(response.data.bills);
      }
    });
  }, [pageNum, memberId]);

  const BillCardList = bills.map((bill) => {
    return <BillCard key={bill.id} content={bill} />;
  });

  return ( member &&
    <PageContainer className="container">
      {/* 의원 정보 */}
      <Title>■ 의원 정보</Title>
      <Row style={{margin: '20px auto', padding: '50px 0', maxWidth: '900px', border: '1px solid #A7A7A7'}}>
        <Col xs={12} sm={6} style={{margin: 'auto'}}>
          <MemberImage src={member.image || null} alt={`${member.name} 의원 사진`} />
          <div style={{color: '#49446B', textAlign: 'center', padding: '10px 0 6px 0'}}>정당</div>
          {member.party && <MemberParty type={member.party}>{member.party}</MemberParty>}
        </Col>
        <Col xs={12} sm={6} style={{}}>
          <MemberInfoRow>
            <MemberInfoAttr>이름</MemberInfoAttr>
            <MemberInfoContent>{member.name}</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>성별</MemberInfoAttr>
            <MemberInfoContent>{member.gender}</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>생년월일</MemberInfoAttr>
            <MemberInfoContent>{member.bth_date}</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>직책명</MemberInfoAttr>
            <MemberInfoContent>{member.position}</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>선거구</MemberInfoAttr>
            <MemberInfoContent>{member.origin}</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>전화번호</MemberInfoAttr>
            <MemberInfoContent>{member.phone}</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>이메일</MemberInfoAttr>
            <MemberInfoContent>{member.email}</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>홈페이지</MemberInfoAttr>
            <MemberInfoContent>{member.homepage}</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>대표 위원회</MemberInfoAttr>
            <MemberInfoContent>{member.main_committee}</MemberInfoContent>
          </MemberInfoRow>
          <MemberInfoRow>
            <MemberInfoAttr>소속 위원회</MemberInfoAttr>
            <MemberInfoContent>{member.committees_array}</MemberInfoContent>
          </MemberInfoRow>
        </Col>    
      </Row>
      
      <div style={{height: '20px'}} />

    
      <Title>■ 발의한 법안 목록</Title>
      <BillCardContainer>
        {BillCardList}
      </BillCardContainer>
      <PagenationContainer>
          {/*페이지네이션*/}
          <Paginate page={pageNum} setPage={setPageNum} totalPage={totalPage} />
        </PagenationContainer>
      <div style={{height: '100px'}} />
    </PageContainer>
  )
}

export default MemberDetailPage;

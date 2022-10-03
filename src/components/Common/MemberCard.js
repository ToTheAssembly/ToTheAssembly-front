import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const TEXTSTYLE = {
  // background-color, color
  "국민의힘": ['#D22730', 'white'],
  "더불어민주당": ['#004EA1', 'white'],
  "정의당": ['#FFED00', 'black'],
  "기본소득당": ['#00D2C3', '#19233C'],
  "시대전환당": ['#EDD9EB','#4F2685'],
  "무소속": ['#505050', '#ffffff']
}

const CardContainer = styled(Link)`
  text-decoration: none;
  color: black;
`;

const MemberParty = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
  text-align: center;
  font-family: pretendard;
  font-size: 15px;
  background-color: ${props => TEXTSTYLE[props.type][0]};
  color: ${props => TEXTSTYLE[props.type][1]};
  margin: 0px;
`

const MemberImageContainer = styled.div`
  width: 150px;
  height: 200px;
  background: #D9D9D9;
  position: relative;
`

const MemberImage = styled.img`
  width: 150px;
  height: 200px;
`

const MemberInfo = styled.div`
  text-align: center;
  justyfy-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  background: #ffffff;
  margin: 0px;
`

const MemberOrigin = styled.div`
  font-size: 15px;
  font-family: Pretendard;
  margin: 8px 0 0 0;
  padding: 0;
  line-height: 1em;
  color: #779BE0;
`

const MemberName = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 18px;
  font-family: Pretendard;
`;

const MemberCard = ( props ) => {
  const data = props.data; 

  return (
      <Col xs={6} sm={4} md={3} style={{}}>
        <CardContainer to={`/member/detail`} state={{data: data && data.id}}>
        <Card style={{width: '170px', padding: '10px', margin: '20px auto'}}>
          <MemberImageContainer>
            {data.party && <MemberParty type={data.party}>{data.party}</MemberParty>}
            <MemberImage src={data.image} alt={`${data.name} 의원 사진`} />
          </MemberImageContainer>
          <MemberInfo>
            <MemberOrigin>{data.origin}</MemberOrigin>
            <MemberName>
              <p>{data.name}</p>&nbsp;
              <p style={{fontSize: '14px', paddingBottom: '0px'}}>의원</p>
            </MemberName>
          </MemberInfo>
        </Card>
        </CardContainer>
      </Col>
  )
}

export default MemberCard;

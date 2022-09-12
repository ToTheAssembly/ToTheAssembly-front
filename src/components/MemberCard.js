import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const TEXTSTYLE = {
  // background-color, color
  "국민의힘": ['#F01C2A', 'white'],
  "더불어민주당": ['#004EA1', 'white'],
  "정의당": ['#FFED00', 'black'],
  "기본소득당": ['#00D2C3', '#19233C']
}

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

const MemberImage = styled.div`
  width: 150px;
  height: 200px;
  background: #D9D9D9;
  position: relative;
`

const MemberInfo = styled.div`
  text-align: center;
  justyfy-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  background: #ffffff;
  margin: 0px;
  flex: 
`

const MemberOrigin = styled.div`
  font-size: 15px;
  font-family: Pretendard;
  margin: 6px 0px 0px 0px;
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

const MemberCard = () => {
  return (
    <Col xs={6} sm={4} md={3} style={{}}>
      <Card style={{width: '170px', padding: '10px', margin: '20px auto'}}>
        <MemberImage src={""}>
          <MemberParty type={"더불어민주당"}>더불어민주당</MemberParty>
        </MemberImage>
        <MemberInfo>
          <MemberOrigin>서울 도봉구</MemberOrigin>
          <MemberName>
            <p>대한민국</p>&nbsp;
            <p style={{fontSize: '14px', paddingBottom: '0px'}}>의원</p>
          </MemberName>
        </MemberInfo>
      </Card>
    </Col>
  )
}

export default MemberCard;

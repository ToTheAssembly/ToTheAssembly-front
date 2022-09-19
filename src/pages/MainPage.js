import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tag from '../components/Common/Tag';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const SearchBackground = styled.div`
    height: 300px;
    background: #EDF4FA;
`;

const SearchContainer = styled.div`
    max-width: 600px;
    margin: auto;
    text-align: center;
`

const TagBox = styled.div`
    width: 400px;
    margin: auto;
    display: flex;
    flex-direction: row;
    font-family: Pretendard
`;

// 의안 총계
const BillCountContainer = styled.div`
    display: flex;
    height: 320px;
    max-width: 900px;
    margin: auto;
    background: white;
`;

const CIRCLESTYLE = {
    // background-color, font-size
    "thisMonth": ['#CCD4E4', ''],
    "thisWeek": ['#CCD4E4', ''],
    "totalCount": ['#A39DBC', ''],
    "title": ['', '24px'],
    "count": ['', '48px']
}

const BillCountCircle = styled.div`
    width: 200px;
    min-width: 200px;
    height: 200px;
    min-height: 200px;
    margin: 60px auto;
    padding: 50px 0 0 0;
    text-align: center;
    vertical-align: center;
    background-color: ${props => CIRCLESTYLE[props.type][0]};
    border-radius: 100px;
`
const BillCount = styled.p`
    margin: auto;
    padding: auto;
    font-family: Pretendard;
    color: black;
    font-size: ${props => CIRCLESTYLE[props.type][1]};
`

const Title = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: #49446B;
  font-size: 32px;
  margin: 60px auto 20px;
  text-align: center;
  max-width: 900px
`

const TEXTSTYLE = {
    // color, font-size
    "popular-title": ['#C4C4D7', '22px'],
    "popular-text": ['white', '18px'],
    "recency-title": ['#49446B', '22px'],
    "recency-text": ['black', '18px'],
    "trend-title": ['#FFEF60', '22px']
}

const SubTitle = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: ${props => TEXTSTYLE[props.type][0]};
  font-size: ${props => TEXTSTYLE[props.type][1]};
  max-width: 900px;
  margin: 0 0 6px 0;
`
const ContentText = styled.div`
  font-family: Pretendard;
  color: ${props => TEXTSTYLE[props.type][0]};
  font-size: ${props => TEXTSTYLE[props.type][1]};
`


// 인기, 최신 트렌드 분석
const HotContainer = styled.div`
    display: relative;
    height: 600px;
    background-color: #EDF4FA;
`

// 인기
const PopularContainer = styled.div`
    padding: 20px;
    height: 190px;
    background-color: #49446B;
    margin: 20px 0 0 0;
`
// 최신
const RecencyContainer = styled.div`
    padding: 20px;
    height: 190px;
    background-color: #C4C4D7;
    margin: 20px 0 0 0;
`
// 트렌드 분석 페이지로 이동
const TrendContainer = styled.div`
    padding: 20px;
    height: 400px;
    background-color: #779BE0;
    margin: 20px 0 0 0;
`

const Input = styled.input`
    background: #EDF4FA;
    border: 0px solid black;
`

const MainPage = ({ history }) => {

    const [thisWeek, setThisWeek] = useState(0);
    const [thisMonth, setThisMonth] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        axios.get("/api/bill/count").then((response) => {
            if(response.data.success) {
                setThisWeek(response.data.thisWeek);
                setThisMonth(response.data.thisMonth);
                setTotalCount(response.data.totalCount);
            }
        })
    })


    return (
        <>
        
        <SearchBackground>
            <SearchContainer>
                검색창 작업 중
              <FontAwesomeIcon icon={faSearch} color="black" />
                <hr style={{width: '300px'}}/>
                <hr style={{border: '1px', color: 'silver', width: '90%'}} />
                <TagBox>
                    <Tag hashtag={"태그1"}/>
                    <Tag hashtag={"태그2"}/>
                    <Tag hashtag={"태그333"}/>
                </TagBox>
            </SearchContainer>    
        </SearchBackground>
        
        <Title>의안 수 총계</Title>
        
        <BillCountContainer>
            
            <BillCountCircle type={"thisMonth"}>
                <BillCount type={"title"}>이번 달 의안</BillCount>
                <BillCount type={"count"}>{thisMonth}</BillCount>
            </BillCountCircle>
            <BillCountCircle type={"thisWeek"}>
                <BillCount type={"title"}>이번 주 의안</BillCount>
                <BillCount type={"count"}>{thisWeek}</BillCount>
            </BillCountCircle>
            <BillCountCircle type={"totalCount"}>
                <BillCount type={"title"}>제21대 국회</BillCount>
                <BillCount type={"count"}>{totalCount}</BillCount>
            </BillCountCircle>
        </BillCountContainer>

        <HotContainer clas="container">
            <Row style={{margin: '20px auto', padding: '50px 0', maxWidth: '900px'}}>
                <Col xs={12} sm={6} style={{}}>
                    <PopularContainer>
                        <SubTitle type={"popular-title"}>이번 주 인기 의안</SubTitle>
                        <ContentText type={"popular-text"}>· 텍스트</ContentText>
                        <ContentText type={"popular-text"}>· 텍스트</ContentText>
                        <ContentText type={"popular-text"}>· 텍스트</ContentText>
                    </PopularContainer>
                    <RecencyContainer>
                        <SubTitle type={"recency-title"}>최근 발의된 의안</SubTitle>
                        <ContentText type={"recency-text"}>· 텍스트</ContentText>
                        <ContentText type={"recency-text"}>· 텍스트</ContentText>
                        <ContentText type={"recency-text"}>· 텍스트</ContentText>
                    </RecencyContainer>
                </Col>
                <Col xs={12} sm={6} style={{}}>
                    <TrendContainer>
                    <SubTitle type={"trend-title"}>트렌드 분석 ▶▶</SubTitle>
                        <ContentText type={"recency-text"}>토픽 분석</ContentText>
                        
                    </TrendContainer>
                </Col>                
            </Row>
        </HotContainer>
        
        </>
    );
};

export default MainPage;

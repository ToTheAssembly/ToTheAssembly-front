import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";
import MemberNetwork from '../components/MemberNetwork';
import MemberNetworkD3 from '../components/MemberNetworkD3';
import CustomSlider from './CustomSlider';


const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const Title = styled.div`
    padding: 20px;
    color: #49446B;
    background-color: white;
    font-size: 30px;    
    font-family: Pretendard;
    font-weight: bold;
`

// 트렌드 분석
const TrendFrame = styled.div`
    background: #EDF4FA;
    text-align: center;
    width: 1000px;
    height: 600px;
`

// 의원 네트워크
const NetworkFrame = styled.div`
    background: #EDF4FA;
    width: 1000px;
    min-height: 600px;
`

const TrendPage = () => {
  const [trendTopics, setTrendTopics] = useState([]);
  const [trendValues, setTrendValues] = useState([]);
  const [month, setMonth] = useState("08");
  const [year, setYear] = useState("2022");
  const [monthValue, setMonthValue] = useState(8);

  useEffect(() => {
    
    axios.get(`/api/trend/${year}-${month}`).then((response) => {
      if (response.data.success) {
        setTrendTopics(response.data.topics);
        setTrendValues(response.data.values);
      }
    });
  }, [year, month]);

  const handleChange = (newValue) => {
    setMonthValue(newValue);
    let newMonth = monthValue >= 10 ? monthValue : '0' + monthValue; // 두글자면 그대로 한글자면 앞에 0붙여서
    setMonth(newMonth);
  }

  return (
    <PageContainer>
      <Title>토픽 트렌드</Title>
      <TrendFrame>
        <CustomSlider parentSetValue={handleChange} />
        {true && <MemberNetworkD3 topics={trendTopics} values={trendValues} year={year} month={monthValue} />}
      </TrendFrame>
      <Title>의원 네트워크</Title>
      <NetworkFrame>
        <iframe title="의원 네트워크" width="1000" height="600" frameBorder="0" scrolling="no" src="http://localhost:8000/network/">의원 네트워크</iframe>
        <MemberNetwork width={1000} height={1000} fill="#ffffff" />
      </NetworkFrame>
      <div style={{ height: "100px" }} />
    </PageContainer>
  )
}

export default TrendPage;

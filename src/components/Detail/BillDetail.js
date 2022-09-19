import React from 'react';
import styled from "styled-components";
import Category from '../Common/Category';
import Tag from '../Common/Tag';
import BillTable from './BillTable';


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentContainer = styled.div`
  font-family: Pretendard;
`;

const BillTitle = styled.div`
  margin: 10px 0 10px 5px;
  font-size: 28px;
  font-weight: 700;
`;

const BillContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: solid 1px #C4C4D7;
  font-size: 18px;
`;

const ContentTitle = styled.div`
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 700;
`;

const Content = styled.div`
  padding: 5px;
`;


const BillDetail = () => {
  return (
    <div>
      <div style={{height: '70px'}} />
      <HeaderContainer>
        <Category category={"카테고리"}/>
        <Tag hashtag={"자원"} />
        <Tag hashtag={"절약"} />
        <Tag hashtag={"재활용"} />
      </HeaderContainer>
      <ContentContainer>
        <BillTitle>자원의 절약과 재활용촉진에 관한 법률 일부개정법률안</BillTitle>
        <BillTable />
        <BillContentBox>
          <ContentTitle>내용</ContentTitle>
          <Content>의안 내용 미리보기... 최근 백두대간 및 비무장지대 등에 대한 개발의 목소리가 높아지고 있는 가운데, ...(중략)... 하지만 현행 「자연환경보전법」에 따른 자연환경보전기본방침 수립 시 고려대상에 생태축 보전·복원 내용이 포함되어 있지 않아 ...(중략)... 이에 자연환경보전기본방침 수립 시 고려대상에 생태축 보전복원 내용을 포함하고, 생태축 보전복원이 국가 또는 지방자치단체의 책무로 이어질 수 있도록 생태축 정의를...  의안 내용 미리보기... 최근 백두대간 및 비무장지대 등에 대한 개발의 목소리가 높아지고 있는 가운데, ...(중략)... 하지만 현행 「자연환경보전법」에 따른 자연환경보전기본방침 수립 시 고려대상에 생태축 보전·복원 내용이 포함되어 있지 않아 ...(중략)... 이에 자연환경보전기본방침 수립 시 고려대상에 생태축 보전복원 내용을 포함하고, 생태축 보전복원이 국가 또는 지방자치단체의 책무로 이어질 수 있도록 생태축 정의를 보다 구체화하여 그 실효성을 제고하고자 함(안 제2조제8호 및 제6조제2항제8호).</Content>
        </BillContentBox>
      </ContentContainer>
    </div>
  )
}

export default BillDetail;

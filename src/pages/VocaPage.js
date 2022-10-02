import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const OrderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  font-size: 25px;
  background-color: ${(props) => props.type};
  margin: 10px;
  font-family: Pretendard;
  text-align: center;
`;

const VocaBox = styled.div`
  display: inline-block;
  color: white;
  width: auto;
  padding: 3px 10px;
  background: #779be0;
  font-size: 20px;
  font-family: Pretendard;
  margin: 20px 0;
`;

const ContentBox = styled.div`
  padding: 20px;
  border: 2px solid #a7a7a7;
  margin: 0 0 20px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3px;
  margin: 0 0 20px 0;
`;

const Voca = styled.div`
  min-width: 70px;
  color: #49446b;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
`;

const Definition = styled.div`
  color: #49446b;
  font-size: 20px;
  font-family: Pretendard;
`;

const VocaPage = () => {
  return (
    <PageContainer>
      <div style={{ height: "50px" }} />
      <OrderContainer>
        <OrderBox type={"#F3F6F8"}>
          의안
          <br />
          안건
          <br />
          의제
        </OrderBox>
        <FontAwesomeIcon
          style={{ color: "#19233C", fontSize: "80px" }}
          icon={faChevronRight}
        />
        <OrderBox type={"#EDF4FA"}>
          발의
          <br />
          제출
          <br />
          제안
          <br />
          제의
        </OrderBox>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "#19233C", fontSize: "80px" }}
        />
        <OrderBox type={"#D3DCEF"}>
          의결
          <br />
          부결
          <br />
          폐기
        </OrderBox>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "#19233C", fontSize: "80px" }}
        />
        <OrderBox type={"#C4C4D7"}>
          수정안
          <br />
          대안
          <br />
          위원회안
        </OrderBox>
      </OrderContainer>
      <div style={{ height: "70px" }} />
      <ContentContainer>
        <VocaBox>의안·안건·의제</VocaBox>
        <ContentBox>
          <Content>
            <Voca>■ 의안</Voca>
            <Definition>
              헌법, 「국회법」, 그 밖의 법률에 따라 국회의 의결을 필요로 하는
              안건 중 특별한 형식적 요건을 갖추어 국회에 제출된 것을 말한다.
            </Definition>
          </Content>
          <Content>
            <Voca>■ 안건</Voca>
            <Definition>
              국회에서 논의대상이 되는 모든 사안을 말하며 의안과 그 밖의 사안을
              포함한다.
            </Definition>
          </Content>
          <Content>
            <Voca>■ 의제</Voca>
            <Definition>
              의결 여부와 관계없이 당일 회의에서 논의의 대상이 된 안건의 제목을
              말한다.
            </Definition>
          </Content>
        </ContentBox>

        <VocaBox>발의·제출·제안·제의</VocaBox>
        <ContentBox>
          <Definition>
            헌법과 「국회법」에서 의안 등을 국회에 내는 것을 발의, 제출, 제안
            또는 제의 등의 용어를 사용하고 있으나 이들 용어는 다음과 같이
            구별된다.
          </Definition>
          <div style={{ height: "10px" }} />
          <Content>
            <Voca>■ 발의</Voca>
            <Definition>의원이 의안을 낼 때</Definition>
          </Content>
          <Content>
            <Voca>■ 제출</Voca>
            <Definition>정부가 의안을 낼 때</Definition>
          </Content>
          <Content>
            <Voca>■ 제안</Voca>
            <Definition>위원회가 의안을 낼 때</Definition>
          </Content>
          <Content>
            <Voca>■ 제의</Voca>
            <Definition>의장이 의안을 낼 때</Definition>
          </Content>
          <div style={{ height: "20px" }} />
          <Definition>
            일반적으로 발의와 제출을 포함하여 「제안」이라고도 한다.
          </Definition>
        </ContentBox>

        <VocaBox>의결·부결·폐기</VocaBox>
        <ContentBox>
          <Content>
            <Voca>■ 의결</Voca>
            <Definition>
              합의체의 전체의사를 결정하기 위한 사실상의 의사형성행위로서 그
              결과는 가결·부결·동의(同意)·승인(承認)·채택(採擇) 등으로 나타나며,
              가결(可決)의 개념으로 사용되는 경우가 많다.
            </Definition>
          </Content>
          <Content>
            <Voca>■ 부결</Voca>
            <Definition>의결정족수에 미달하는 의결의 형태이다.</Definition>
          </Content>
          <Content>
            <Voca>■ 폐기</Voca>
            <Definition>
              제출된 안건을 심의·의결대상에서 제외시키는 조치로서 국회에서
              의안이 폐기되는 경우는 다음의 4가지가 있다.
            </Definition>
          </Content>
          <Definition style={{ marginLeft: "20px" }}>
            ① 위원회가 본회의에 부의하지 아니하기로 결정하여 이를 본회의에
            보고한 후 의원(30인 이상)으로부터 일정 기간(폐회 또는 휴회기간을
            제외한 7일 이내) 내에 본회의 부의요구가 없는 경우(국87)
            <br />
            ②「국회법」상 의결시한이 경과한 경우(국112⑦·130②)
            <br />
            ③ 의안의 제안취지가 상실된 경우
            <br />④ 의원의 임기가 만료된 경우(헌51)
          </Definition>
        </ContentBox>
        <VocaBox>수정안·대안·위원회안</VocaBox>
        <ContentBox>
          <Content>
            <Voca style={{ minWidth: "100px" }}>■ 수정안</Voca>
            <Definition>
              의안의 원안에 대하여 다른 의사를 가하여 추가·삭제·변경 등을 행하는
              것을 수정이라 하며, 그 수정내용에 일정한 형식을 갖추어 발의하는
              것을 수정안이라 한다. 수정안은 위원회 수정안과 본회의 수정안으로
              구분되며, 그 내용은 원안의 목적 또는 성격을 변경하지 아니하는 범위
              안에서 작성되어야 한다.
            </Definition>
          </Content>
          <Content>
            <Voca style={{ minWidth: "100px" }}>■ 대안</Voca>
            <Definition>
              원안과 일반적으로 취지는 같으나 그 내용을 전면적으로 수정하거나
              체계를 다르게 하여 원안에 대신할 만한 내용으로 제출하는 것으로서
              수정안의 성격을 띤다. 위원회제출 대안과 의원발의대안으로 나눌 수
              있다.
            </Definition>
          </Content>
          <Content>
            <Voca style={{ minWidth: "100px" }}>■ 위원회안</Voca>
            <Definition>
              위원회가 그 소관에 속하는 사항에 관하여 독자적으로 입안한 안으로서
              원안의 존재를 전제로 하여 그 심의과정에서 원안을 폐기하고 그
              대신으로 제출하는 대안과는 달리 원안의 존재를 전제로 하지
              아니한다.
            </Definition>
          </Content>
        </ContentBox>
      </ContentContainer>
      <div style={{ height: "70px" }} />
    </PageContainer>
  );
};

export default VocaPage;
